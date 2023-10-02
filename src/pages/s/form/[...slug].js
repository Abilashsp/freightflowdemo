"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { groupBy } from "lodash";
import * as Fields from "@/components/Fields";

const {
  CheckBox,
  TextBox,
  Select,
  NumberBox,
  Email,
  UrlField,
  DateField,
  TimeField,
  FileField,
  WeekField,
} = Fields;

const FieldAlias = {
  Text: TextBox,
  Checkbox: CheckBox,
  Dropdown: Select,
  URL: UrlField,
  Number: NumberBox,
  Email,
  Url: UrlField,
  Date: DateField,
  Time: TimeField,
  File: FileField,
  Week: WeekField,
};

const renderField = (props, section, record) => {
  const { "Data Type": data_type } = props;
  const Field = FieldAlias[data_type];
  if (Field) return <Field {...props} section={section} record={record} />;
  console.log(data_type, Field);
  return <TextBox {...props} section={section} record={record} />;
};

export default function Page() {
  const router = useRouter();
  const path = router?.query?.slug;
  const [data, setData] = useState(null);
  const [record, setRecord] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (filePath) => {
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
    const fetchRecordData = async (filePath) => {
      try {
        if (!filePath) return;
        const res = await fetch(filePath);
        if (!res.ok) {
          throw new Error("File not found");
        }
        const jsonData = await res.json();
        setRecord(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (router?.query?.slug) {
      console.log(router?.query?.slug);
      const filePath = `/api/model?path=${path[0]}`;
      fetchData(filePath);

      if (path[1]) {
        const recordPath = `/api/record?path=${path[0]}&id=${path[1]}`;
        fetchRecordData(recordPath);
      }
    }
  }, [path, router]);

  return (
    <form>
      <h1 className="pb-6 text-2xl text-center">{path && path[0]}</h1>
      {data && record && (
        <>
          <div>
            {Object.keys(data).map((section, sIndx) => {
              return (
                <div
                  key={section}
                  className="pb-4 mt-6 border rounded border-gray-900/10"
                >
                  <div>
                    <h2
                      className={`px-6 py-2 text-base font-semibold leading-10 bg-blue-200  text-blue-900 border-b-2 border-gray-900/10`}
                    >
                      {section}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                  </div>
                  <div className="grid grid-cols-1 px-6 mt-10 gap-x-3 gap-y-3 sm:grid-cols-6">
                    {data[section].map((field) => (
                      <div className="sm:col-span-2">
                        {renderField(
                          field,
                          section.split(" ").join("_"),
                          record.record
                        )}
                      </div>
                    ))}
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