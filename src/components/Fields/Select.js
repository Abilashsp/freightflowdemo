import { useState,useEffect } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const people = [{ name: "Leslie Alexander", username: "@lesliealexander" }];

const Select = (props) => {
  const {
    "Field Name": Field_Name,
    "Data Type": data_type,
    Validate,
    Tooltip,
    Prompt,
    record,
    section,
    "Field_Needed?":Need,
  } = props;
 

console.log(Need==="No")

  let _value = "";
  const [query, setQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);


  useEffect(() => {
    setSelectedValue(_value); 
  }, [_value]);



  if (Field_Name && section && record && record[section]) {
    _value = record[section][Field_Name];
  }

  const filteredPeople =
    query === ""
      ? [_value]
      : [_value].filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedValue} onChange={setSelectedValue}>
      <Combobox.Label className={`block text-sm font-medium leading-6 text-gray-900 `}>
        {Field_Name}
      </Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className={` ${Need==="No"?"bg-gray-500 opacity-80 border-2":"bg-white"} w-full rounded-md border-0  py-1.5 pl-3 pr-12  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none">
          <ChevronUpDownIcon
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base  rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex">
                      <span
                        className={classNames(
                          "truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {person}
                      </span>
                      <span
                        className={classNames(
                          "ml-2 truncate text-gray-500",
                          active ? "text-indigo-200" : "text-gray-500"
                        )}
                      >
                        
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
export default Select;
