
function RadioBox(props) {
    const {
        "Field Name": Field_Name,
        "Data Type": data_type,
        Validate,
        Tooltip,
        "Sample Value":sample_value
      } = props;
  return (
    <div>
    <label className="text-base font-semibold text-gray-900">{ Field_Name}</label>
    <p className="text-sm text-gray-500">How do you prefer to receive notifications?</p>
    <fieldset className="mt-4">
      <legend className="sr-only">Notification method</legend>
      <div className="space-y-4">
          <div key={Field_Name} className="flex items-center">
            <input
              id={Field_Name}
              name="notification-method"
              type="radio"
              
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={Field_Name} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              {sample_value}
            </label>
          </div>
     
      </div>
    </fieldset>
  </div>
  )
}

export default RadioBox