import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { groupBy } from "lodash";
import { CheckIcon } from '@heroicons/react/20/solid'

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
    <form>
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
      <h1 className="pb-6 text-2xl text-center">{path}</h1>

      <nav aria-label="Progress">
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
                    <div className="h-1 mt-4 mt-3 w-full bg-indigo-600 " />
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
      </nav>

      {data && (
        <>
          {Object.keys(data).map((section, sIndx) => {
            if (section === value) {
              return (
                <div
                  key={section}
                  className="pb-4 mt-6 border rounded border-gray-900/10"
                >
                  <div>
                    <h2
                      className={`px-6 py-2 text-base font-semibold leading-10 bg-blue-200 text-blue-900 border-b-2 border-gray-900/10`}
                    >
                      {section}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                  </div>
                  <div className="grid grid-cols-1 px-6 mt-10 gap-x-3 gap-y-3 sm:grid-cols-6">
                    {data[section].map((field) => (
                      <div className="sm:col-span-2">{renderField(field)}</div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end mt-6 gap-x-6">
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
    </form>
  );
}
