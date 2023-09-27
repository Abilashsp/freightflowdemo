import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { groupBy } from "lodash";
import { CheckIcon } from '@heroicons/react/20/solid'
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';

import * as Fields from "../../../components/Fields";
const { TextBox, CheckBox, Select, RadioBox } = Fields;

const FieldAlias = {
  Text: TextBox,
  Checkbox: CheckBox,
  Dropdown: Select,
  radio: RadioBox
};

const renderField = (props) => {
  const { "Data Type": data_type } = props;
  const Field = FieldAlias[data_type];
  if (Field) return <Field {...props} />;
  return <TextBox {...props} />;
};

export default function Page() {
  const router = useRouter();
  const path = router?.query?.slug?.join("/");
  const filePath = `/api/model?path=${path}`;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [save, setSave] = useState(false);
  const [completedSections, setCompletedSections] = useState({});

  const [next, setnext] = useState(1);





  const handleValue = (section) => {
    setValue(section);
  };

  const clickSave = (e) => {
    setSave(true);
    if (value) {
      e.preventDefault();
      setCompletedSections((prevCompletedSections) => ({
        ...prevCompletedSections,
        [value]: true,
      }));
    }
  };

  const handlenext = (e, index) => {
    e.preventDefault();
    const keys = Object.keys(data);
    console.log("keys", keys)
    if (keys) {
      const lastIndex = keys.length - 1;
      console.log("lastindex", lastIndex)
      const newIndex = index + 1 <= lastIndex ? index + 1 : lastIndex;
      setValue(keys[newIndex]);
    }
  };

  const handleprevious = (e, index) => {
    e.preventDefault();
    const keys = Object.keys(data);
    if (keys) {
      const firstIndex = 0;
      const newIndex = index - 1 >= firstIndex ? index - 1 : 0;
      setValue(keys[newIndex]);
    }

  }






  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!filePath) return;
        const res = await fetch(filePath);
        if (!res.ok) {
          throw new Error("File not found");
        }
        const jsonData = await res.json();
        const formSchema = groupBy(jsonData, "Section");
        setData(formSchema);

        if (formSchema && Object.keys(formSchema).length > 0) {
          setValue(Object.keys(formSchema)[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filePath, router]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <form className="h-auto border border-slate-400 rounded-lg">
      {isLoading && (
        <div
          className="inline-block h-8 w-8 animate-spin flex items-center justify-center rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] "
          >
            Loading...
          </span>
        </div>
      )}
      <h1 className="px-4 text-white bg-blue-600 rounded dark:bg-blue-500 py-4 text-2xl font-bold  ">{path}</h1>

      {/* <nav aria-label="Progress">
        <ol role="list" className="flex items-center">
          {data &&
            Object.keys(data).map((step, stepIdx) => (
              <li
                key={stepIdx}
                className={classNames(
                  stepIdx !== Object.keys(data).length - 1
                    ? "pr-8 sm:pr-20"
                    : "",
                  "relative"
                )}
              >
                <div className="whitespace-nowrap">{step}</div>
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-1 mt-4 w-full bg-indigo-600 " />
                  </div>

                  <a
                    href="#"
                    className={
                      completedSections[step]
                        ? "relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 hover:bg-green-900"
                        : "relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                    }
                    onClick={() => handleValue(step)}
                  >
                    {!completedSections[step] && (
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                        aria-hidden="true"
                      />
                    )}
                    {completedSections[step] && (
                      <CheckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                        onClick={() => handleValue(step)}
                      />
                    )}
                  </a>
                </>
              </li>
            ))}
        </ol>
      </nav> */}





      <div className="flex justify-items-start">







        <nav className="h-screen overflow-y-auto mt-5 ml-4 w-1/6 ">
          <h2
            className="text-xs font-semibold leading-7 whitespace-nowrap text-gray-900b   py-2 px-4 rounded-xl  mt-4  text-center "
          >
            Page Navigate
          </h2>

          <ol role="list" className="overflow-hidden px-2 py-2 rounded-lg  border-2 ">
            {data &&
              Object.keys(data).map((step, stepIdx) => (
                <li
                  key={step}
                  className={classNames(
                    stepIdx !== Object.keys(data).length - 1
                      ? "pr-8 sm:pr-4"
                      : "pr-8 sm:pr-4",
                    "relative"
                  )}
                >
                  <>
                    <a
                      className={`group relative flex items-start border rounded-lg mt-1 border-black px-4 py-2 ${completedSections[step]
                          ? "bg-green-500"
                          : "bg-blue-300 hover:bg-white"
                        }
                      
                      
                      ${value===step&&!completedSections[step]&&"bg-blue-800"}`}
                      onClick={() => handleValue(step)}
                    >
                      <span className="flex h-9 items-center">
                        <span
                          className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${completedSections[step]
                              ? "bg-green-600"
                              : "border text-white group-hover:border-gray-400 transition-colors duration-300 ease-in-out"
                            }`}
                        >
                          {!completedSections[step] && (
                            <span className="h-6 w-6 rounded-xl bg-white group-hover:bg-blue-300 transition-colors duration-700 ease-in-out" />
                          )}
                          {completedSections[step] && (
                            <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                          )}
                        </span>
                      </span>


                    

                    <span className=" flex min-w-0 flex-col ">
                      <span className="text-xs w-full font-bold  box-content mt-2  ml-3  ">{step}</span>
                    </span>
                  </a>
                  {/* {stepIdx !== Object.keys(data).length - 1 ? (
                      <div className="absolute left-6 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
                    ) : null} */}
                </>

                </li>
              ))}
        </ol>
      </nav>




























      <div className="space-y-10 divide-y divide-gray-900/10  py-6 px-8 w-4/5 h-screen overflow-y-auto ">

        {data && (
          <>
            {Object.keys(data).map((section, sIndx) => {

              if (section === value) {
                return (

                  <div

                    key={section}
                    className="bg-white shadow-sm border-2 ring-gray-900/5 sm:rounded-xl md:col-span-2  "
                  >

                    <div>
                      <h2
                        className="text-xl font-semibold leading-7 text-gray-900b  bg-green-300 py-4 px-4 rounded-xl mx-10 mt-4 text-center "
                      >
                        {section}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                    </div>
                    <div className="grid grid-cols-1 px-6 mt-10 gap-x-3 gap-y-3 sm:grid-cols-6 ">
                      {data[section].map((field) => (
                        <div className="sm:col-span-2">{renderField(field)}</div>
                      ))}
                    </div>

                    <div class="flex justify-around mt-6 gap-x-6 ">
                      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleprevious(e, sIndx)}>
                        <BsFillCaretLeftFill className="w-7 h-5" />
                        <span class="text-white">Prevs</span>
                      </button>


                      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handlenext(e, sIndx)}>
                        <span class="text-white">Next</span>
                        <BsFillCaretRightFill className="w-7 h-5" />

                      </button>
                    </div>

                    <div className="flex items-center justify-end mt-6 gap-x-6 ">
                      <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={(e) => clickSave(e)}
                      >
                        Save
                      </button>
                    </div>
                  </div>


                );
              } else {
                return null;
              }
            })}
          </>
        )}
      </div>









      {/* 
        <nav className="h-screen overflow-y-auto mt-5 ml-4 ">
          <h2
            className="text-sm font-semibold leading-7 text-gray-900b  bg-blue-300 py-2 px-4 rounded-xl mx-10 mt-4  text-center "
          >
            Page Navigate
          </h2>

          <ol role="list" className="overflow-hidden bg-blue-100 px-2 py-2 rounded-lg mr-4 border-2">
            {data &&
              Object.keys(data).map((step, stepIdx) => (
                <li
                  key={step}
                  className={classNames(
                    stepIdx !== Object.keys(data).length - 1
                      ? "pr-8 sm:pr-20"
                      : "",
                    "relative"
                  )}
                >
                  <>
                    <a className="group relative flex items-start " onClick={() => handleValue(step)}>
                      <span className="flex h-9 items-center">
                        <span className={
                          completedSections[step] ? "relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 group-hover:bg-green-600 mt-4" : "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-500 bg-white group-hover:border-gray-400 mt-4"} >
                          {!completedSections[step] && <span className="h-2.5 w-2.5 rounded-full bg-blue-300 group-hover:bg-blue-700 " />}
                          {completedSections[step] && <CheckIcon className="h-5 w-5 text-white " aria-hidden="true" />}
                        </span>

                      </span>

                      <span className="ml-8 flex min-w-0 flex-col ">
                        <span className="text-sm font-medium mt-4 ">{step}</span>
                      </span>
                    </a>
                    {stepIdx !== Object.keys(data).length - 1 ? (
                      <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
                    ) : null}
                  </>

                </li>
              ))}
          </ol>
        </nav> */}




















    </div>
    </form >
  );
}
