"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const path = router?.query?.slug?.join("/");
  const filePath = `/api/data?path=${path}`;
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
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (path) fetchData();
  }, [path, filePath, router]);


  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {path?.split("_").join(" ")}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            All the {path?.split("_").join(" ")} in your account are listed
            below
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* <button
            type="button"
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button> */}
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {data?.schemal?.map((h) => (
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {h["Field Name"]}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data?.data?.map((r, rIdx) => (
                    <tr>
                      {data?.schemal?.map((h) => (
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {h["Data Type"] === "Checkbox" && (
                            <div className="flex items-center h-6">
                              <input
                                id={h["Field Name"]}
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                enabled={false}
                                checked={r[h["Field Name"]]}
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                              />
                            </div>
                          )}
                          {h["Data Type"] === "Text" && (
                            <>{r[h["Field Name"]]}</>
                          )}
                          {h["Data Type"] === "Dropdown" && (
                            <>{r[h["Field Name"]]}</>
                          )}
                          {h["Data Type"] === "URL" && (
                            <a href={r[h["Field Name"]]} target="_blank">
                              Link
                            </a>
                          )}
                          {h["Data Type"] === "Email" && (
                            <a
                              href={`mailto:${r[h["Field Name"]]}`}
                              target="_blank"
                            >
                              {r[h["Field Name"]]}
                            </a>
                          )}
                          {h["Data Type"] === "File Upload" && (
                            <a href={r[h["Field Name"]]} target="_blank">
                              {r[h["Field Name"]]}
                            </a>
                          )}
                        </td>
                      ))}
                      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                        <a
                          href={`./form/${data?.schemal[0]?.Page}/${rIdx + 1}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                         
                          Edit<span className="sr-only">, {r[0]}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
