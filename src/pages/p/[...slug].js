"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";

const createElementFromJSON = (element,handleRadioChange,selectedAgeGroup) => {
  if (!element) return null;

  const { tag, text, styles, classes, children, src, ...props } = element;
 
  
  const onChangeHandler = props.value !== undefined ? () => handleRadioChange(props.value) : null;


  if (
    props.name === "conditionalField" &&
    selectedAgeGroup  &&
    props.conditional
  ) {
    return React.createElement(
      tag,
      { className: classes, style: styles, src: src, ...props },
      text ? (
        <>
          {text}
          {children?.map((child) =>
            createElementFromJSON(child, handleRadioChange, selectedAgeGroup)
          )}
        </>
      ) : (
        children?.map((child) =>
          createElementFromJSON(child, handleRadioChange, selectedAgeGroup)
        )
      )
    );
  } else if (props.name === "conditionalField") {
    return null; 
  }


  return React.createElement(
    tag,
    { className: classes, style: styles, src: src, ...props , onChange:onChangeHandler},
    text ? (
      <>
        {text}
        {children?.map((child) => createElementFromJSON(child,handleRadioChange,selectedAgeGroup))}
      </>
    ) : (
      children?.map((child) => createElementFromJSON(child,handleRadioChange,selectedAgeGroup))
    )
  )

  
};

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(false);
  const router = useRouter();
  const path = router?.query?.slug?.join('/');
  const filePath = `/ui/${path}.json`;

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

  console.log(selectedAgeGroup)
  const handleRadioChange = (value) => {
    setSelectedAgeGroup(value);
  };
  if (isLoading) {
    return <div>Loading Page please wait....</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center border-2 w-full h-screen overflow-y-auto pb-12 m-4  mb-4">
       {/* <div className=" h-1 h-2 h-3 h-4 h-5 h-6 h-7 h-8 h-9 h-10 h-10 w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center sm:flex-auto text-base font-semibold leading-6 text-gray-900 mt-2 text-sm text-gray-700 mt-4 sm:ml-16 sm:mt-0 sm:flex-none block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8 flow-root -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 min-w-full divide-y divide-gray-300 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 relative py-3.5 pl-3 pr-4 sm:pr-0 sr-only whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0 flex items-center h-11 w-11 flex-shrink-0 h-11 w-11 rounded-full ml-4 font-medium text-gray-900 mt-1 text-gray-500 whitespace-nowrap px-3 py-5 text-sm text-gray-500 text-gray-900 mt-1 text-gray-500 whitespace-nowrap px-3 py-5 text-sm text-gray-500 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 whitespace-nowrap px-3 py-5 text-sm text-gray-500 relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 text-indigo-600 hover:text-indigo-900 hidden"></div>
 <div className="space-y-12
border-b border-white/10 pb-12
text-base font-semibold leading-7 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6
sm:col-span-4
block text-sm font-medium leading-6 text-white
mt-2
flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500
flex select-none items-center pl-3 text-gray-500 sm:text-sm
flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6
pl-3 text-gray-500 sm:text-sm
sm:col-span-3
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
sm:col-span-3
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
sm:col-span-4
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
col-span-full
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
mt-3 text-sm leading-6 text-gray-400
col-span-full
block text-sm font-medium leading-6 text-white
mt-2 flex items-center gap-x-3
h-12 w-12 text-gray-500
rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20
Change
col-span-full
block text-sm font-medium leading-6 text-white
mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10
mx-auto h-12 w-12 text-gray-500
relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500
span
text-xs leading-5 text-gray-400
relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500
input
sr-only
text-base font-semibold leading-7 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6
sm:col-span-4
block text-sm font-medium leading-6 text-white
mt-2
flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500
flex select-none items-center pl-3 text-gray-500 sm:text-sm
flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6
pl-3 text-gray-500 sm:text-sm
col-span-full
block text-sm font-medium leading-6 text-white
block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
mt-3 text-sm leading-6 text-gray-400
col-span-full
block text-sm font-medium leading-6 text-white
mt-2 flex items-center gap-x-3
h-12 w-12 text-gray-500
rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20
Change
col-span-full
block text-sm font-medium leading-6 text-white
mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10
mx-auto h-12 w-12 text-gray-500
relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500
label
block text-sm font-medium leading-6 text-white
mt-2
input
text-base font-semibold leading-7 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6
sm:col-span-3
block text-sm font-medium leading-6 text-white
mt-2
input
text-base font-semibold leading-7 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6
sm:col-span-3
block text-sm font-medium leading-6 text-white
mt-2
input
text-base font-semibold leading-7 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6
sm:col-span-4
block text-sm font-medium leading-6 text-white
mt-2
input
text-base font-semibold leading-7 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6
block text-sm font-medium leading-6 text-white
mt-2
input
text-base font-semibold leading-7 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 space-y-10
fieldset
text-sm font-semibold leading-6 text-white
mt-6 space-y-6
relative flex gap-x-3
flex h-6 items-center
input
h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900
text-sm leading-6
label
font-medium text-white
text-gray-400
relative flex gap-x-3
flex h-6 items-center
input
h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900
text-sm leading-6
label
font-medium text-white
text-gray-400
relative flex gap-x-3
flex h-6 items-center
input
h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900
text-sm leading-6
label
font-medium text-white
text-gray-400
text-sm font-semibold leading-6 text-white
mt-1 text-sm leading-6 text-gray-400
mt-10 space-y-10
fieldset
text-sm font-semibold leading-6 text-white
mt-1 text-sm leading-6 text-gray-400
mt-6 space-y-6
flex items-center gap-x-3
text-sm leading-6
label
font-medium text-white
text-gray-400
relative flex gap-x-3
flex h-6 items-center
input
h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900
text-sm leading-6
label
font-medium text-white
text-gray-400
text-sm font-semibold leading-6 text-white
text-gray-400
flex justify-end space-x-4
button
px-4 py-2 text-sm font-semibold text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
bg-black"></div>
<div className="   mt-4 px-4 py-4 rounded-lg text-xl sm:col-span-2 w-full h-screen sm:col-span-5 w-2/5 justify-betweenh-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm block w-full rounded-md border-0 py-1.5 pl-16 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 overflow-y-auto placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  text-black bg-slate-100 sm:leading-6 "></div> */}
      {data.ui.root.map((element) =>
        createElementFromJSON(element,handleRadioChange,selectedAgeGroup)
      )}
    
      {/* {selectedAgeGroup&& <div>
        
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"/>
        </div>} */}
        
     
    </div>
  );
}
