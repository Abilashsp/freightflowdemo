"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { groupBy } from "lodash";

export default function Page() {
  const router = useRouter();
  const path = router?.query?.slug?.join("/");
  const filePath = `/api/model?path=${path}`;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [editRow, setEditRow] = useState(null);

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

  return (
    <form>
      <h1 className="pb-6 text-2xl text-center">{path}</h1>
      {data && (
        <>
          <div>
            {Object.keys(data).map((section) => {
              return (
                <div
                  key={section}
                  className="p-6 mt-6 border rounded border-gray-900/10"
                >
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900 border-b-2 border-gray-900/10">
                      {section}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                  </div>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {data[section].map((field) => {
                      const {
                        "Field Name": Field_Name,
                        "Data Type": data_type,
                        "Sample Value": sample_value,
                        Validate,
                        Tooltip,
                        Prompt,
                      } = field;
                      return (
                        <div key={Field_Name} className="sm:col-span-2">
                          <label
                            htmlFor={Field_Name}
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            {Field_Name}
                            {Validate && (
                              <span
                                className="pl-1 text-xs text-red-500"
                                title={Tooltip}
                              >
                                *
                              </span>
                            )}
                            {Tooltip && (
                              <span
                                className="float-right text-xs text-blue-500 align-super"
                                title={Tooltip}
                              >
                                !
                              </span>
                            )}
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type={data_type}
                                name={Field_Name}
                                id={Field_Name}
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder={Prompt}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
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
            >
              Save
            </button>
          </div>
        </>
      )}
    </form>
  );
}
