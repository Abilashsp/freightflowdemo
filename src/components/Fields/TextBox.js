import{Formik,Form,Field,ErrorMessage}from "formik"
import { useState } from "react";

const TextBox = (props) => {
  const[inputvalues,setinputvalues]=useState([]);


const handleinput=(data)=>{

setinputvalues(data)
console.log(inputvalues)
 
}




  const {
    "Field Name": Field_Name,
    "Data Type": data_type,
    Validate,
    Tooltip,
    Prompt,
    "Sample Value":sample_value,

  } = props;
  
  return (
    <>
      <label
        htmlFor={Field_Name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {Field_Name}
        {Validate==="Mandatory" && (
          <span className="pl-1 text-xs text-red-500" title={Tooltip}>
            *
          </span>
        )}
      </label>
      <Formik
      initialValues={{}}
      validate={(values)=>{
      handleinput(values)
      }
     
    }
      
      
      >
        <Form onSubmit={handleinput}>
      <div className="mt-1">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          
          <Field
            type="text"
            name={Field_Name}
            id={Field_Name}
            value={sample_value}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={Prompt}
            // required
          />
       
        </div>
        {Tooltip && Tooltip.toLowerCase() !== Field_Name.toLowerCase() && (
          <p className="mt-1 ml-2 text-xs text-blue-500">{Tooltip}</p>
        )}
      </div>
      </Form>
      </Formik>
    </>
  );
};
export default TextBox;
