import { useState } from "react";

const Checkbox = (props) => {
  const {
    "Field Name": Field_Name,
    "Data Type": data_type,
    Validate,
    Tooltip,
    section,
    record,
  } = props;

  let _value = "";
  let hasValue = false;

  if (Field_Name && section && record && record[section]) {
    _value = record[section][Field_Name];
    hasValue = true;

    if (_value === "Yes") _value = true;
    if (_value === "No") _value = false;
  }
  return (
    <div className="mt-8 space-y-6">
      <div className="relative flex gap-x-3">
        <div className="flex items-center h-6">
          <input
            id={Field_Name}
            name={Field_Name}
            type="checkbox"
            checked={hasValue && _value}
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
          />
        </div>
        <div className="text-sm leading-6">
          <label
            htmlFor={Field_Name}
            className="font-medium text-gray-900 cursor-pointer"
          >
            {Field_Name}
          </label>
          {Validate && (
            <span className="pl-1 text-xs text-red-500" title={Tooltip}>
              *
            </span>
          )}
          {Tooltip && <p className="text-gray-500">{Tooltip}</p>}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;