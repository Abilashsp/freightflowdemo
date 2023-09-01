import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";

const createElementFromJSON = (element) => {
  if (!element) return null;

  const { tag, text, styles, classes, children, src } = element;
  console.log("text", text, classes)
  return React.createElement(
    tag,
    { className: classes, style: styles, src: src },
    //   //  text,
    //  children?.map(createElementFromJSON)
    // )

    text ? (
      <>
        {text}
        {children?.map(createElementFromJSON)}
      </>
    ) : (
      children?.map(createElementFromJSON)
    )
  );
}

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const path = router?.query?.slug?.join('/');
  const filePath = `/ui/${path}.json`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(filePath);
        if (!res.ok) {
          throw new Error("File not found");
        }
        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        router.replace('/404');
      }
    };

    fetchData();
  }, [filePath, router]);

  if (isLoading) {
    return <div>Loading Page please wait....</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center border-2 w-full h-screen">
      <div className="h-1 h-2 h-4 h-3 h-6 h-5 h-7 h-8 h-9 w-1 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10  
px-4 sm:px-6 lg:px-8 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
m-8
hidden flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-screen rounded-lg"></div>
      {data.ui.root.map(createElementFromJSON)}
    </div>
  );
}
