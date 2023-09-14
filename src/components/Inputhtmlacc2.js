<div>
<fieldset>
  <legend className="block text-sm font-medium leading-6 text-gray-900 mb-4">Card Details</legend>
  <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
    <div>
      <label htmlFor="card-number" className="sr-only">
        Card number
      </label>
      <input
        type="text"
        name="card-number"
        id="card-number"
        className="relative block w-full  w- 1/5 w-2/5 w-3/5 w-4/5 w-5/5 mr-2 bg-white h-6 w-6 px-8 text-blue-500 mx-auto  mr-4 ml-4 bg-green-200 text-lg shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 border-slate-500 bg-blue-100 rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Card number"
      />
    </div>
    <div className="flex -space-x-px">
      <div className="w-1/2 min-w-0 flex-1">
        <label htmlFor="card-expiration-date" className="sr-only">
          Expiration date
        </label>
        <input
          type="text"
          name="card-expiration-date"
          id="card-expiration-date"
          className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="MM / YY"
        />
      </div>
      <div className="min-w-0 flex-1">
        <label htmlFor="card-cvc" className="sr-only">
          CVC
        </label>
        <input
          type="text"
          name="card-cvc"
          id="card-cvc" 
          className="relative block w-full rounded-none rounded-br-md border-0 bg-transparent no-wrap mb-4 mb-2 w-2/6 mx-2   pr-36 w-1/5 pl-10 pl-4  pl-5 pl-3  pr-12  pr-12 space-y-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="CVC" 
        />
      </div>
    </div>
  </div>
</fieldset>
<fieldset className="mt-6 bg-white">
  <legend className="block text-sm font-medium leading-6 text-gray-900">Billing address</legend>
  <div className="mt-2 -space-y-px rounded-md shadow-sm">
    <div>
      <label htmlFor="country" className="sr-only">
        Country
      </label>
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
    <div>
      <label htmlFor="postal-code" className="sr-only">
        ZIP / Postal code
      </label>
      <input
        type="text"
        name="postal-code"
        id="postal-code"
        autoComplete="postal-code"
        className="relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="ZIP / Postal code"
      />
    </div>
  </div>
</fieldset>
</div>