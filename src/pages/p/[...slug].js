"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import { data } from "autoprefixer";

const createElementFromJSON = (element, handleRadioChange, selectedAgeGroup, approvalData) => {
  if (!element) return null;

  const { tag, text, styles, classes, children, src, ...props } = element;

  const onChangeHandler = props.value !== undefined ? () => handleRadioChange(props.value) : null;

  if (props.api === "apidata" && approvalData) {
    return approvalData.map((dataItem,index) => {
      return React.createElement(
        tag,
        {
          key: index,
          className: classes,
          style: styles,
          src: src,
        
        },
        dataItem.name? (
          <>
          <td classes="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{`${dataItem.name}`}</td>  
          <td classes="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {`${dataItem.Title}`}</td>     
          <td classes="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {`${dataItem.Status}`}</td>    
          <td classes="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {`${dataItem.Role}`}</td>   
            
            {children?.map((child) =>
              createElementFromJSON(child, handleRadioChange, selectedAgeGroup, approvalData)
            )}
          </>
        ) : (
          children?.map((child) =>
            createElementFromJSON(child, handleRadioChange, selectedAgeGroup, approvalData)
          )
        )
      );
    });
  } else if (props.name === "conditionalField") {
    return null;
  }

  return React.createElement(
    tag,
    { className: classes, style: styles, src: src, ...props, onChange: onChangeHandler },
    text ? (
      <>
        {text}
        {children?.map((child) => createElementFromJSON(child, handleRadioChange, selectedAgeGroup, approvalData))}
      </>
    ) : (
      children?.map((child) => createElementFromJSON(child, handleRadioChange, selectedAgeGroup, approvalData))
    )
  );
};

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(false);
  const router = useRouter();
  const [approvalData, setApprovalData] = useState([]);
  const path = router?.query?.slug?.join('/');
  const filePath = `/ui/${path}.json`;
  const apipath = "/api/approval";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(filePath);
        if (!res.ok) {
          throw new Error("File not found");
        }
        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        router.replace('/404');
      }
    };

    fetchData();
  }, [filePath, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apipath);
        if (!res.ok) {
          throw new Error("Error fetching data");
        }
        const jsonData1 = await res.json();
        setApprovalData(jsonData1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(approvalData)

  const handleRadioChange = (value) => {
    setSelectedAgeGroup(value);
  };

  if (isLoading) {
    return <div>Loading Page please wait....</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center border-2 w-full h-full">
      {data.ui.root?.map((element, index) =>
        createElementFromJSON(element, handleRadioChange, selectedAgeGroup, approvalData)
      )}
    </div>
  );
}
