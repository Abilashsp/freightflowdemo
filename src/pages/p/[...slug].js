import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const path = router?.query?.slug?.join('/');

  const filePath = `/ui/${path}.json`;

  useEffect(() => {
    fetch(filePath)
      .then((res) => {
        if (!res.ok) {
          throw new Error("File not found");
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        router.replace('/404'); // Redirect to the 404 page
      });
  }, [filePath, router]);

  if (isLoading) {
    return <div>Loading Page please wait....</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center border-2 w-full h-screen">
      <div className="font-bold text-xl py-5 bg-red-500 text-center hidden"></div>      
      {data.ui.root.map((element) => (

        <div className="mt-8 w-4/5 h-screen">
          {console.log(data)}
          {console.log(typeof element.tag)}
          {console.log(element.post)}
          {React.createElement(
            element.tag,
            { style: element.styles, id: element.id, className: element.class, },
            element.text,
            element.children1?.map((ii) => React.createElement(
              ii.tag,
              { type: ii.type, id: ii.id, class: ii.class},
              ii.text,)),
            element.children?.map((ik) => React.createElement(
              ik.tag,
              { style: ik.styles, type: ik.type, id: ik.id, className: ik.class },
              ik.text,
              ik.child?.map((i) => React.createElement(
                i.tag,
                { style: i.styles, type: i.type, id: i.id, className: i.class, pattern: i.pattern, required: i.required ,},
                i.text
              ))
            ))
            //   i.childschild?.map((ai) => React.createElement(
            //     ai.tag,
            //     { className: ai.class, id: ai.id,style:ai.styles },
            //     "child's child",
            //     ai.gs?.map((g) => React.createElement(
            //       g.tag,
            //       { className: g.class, id: g.id },
            //       "child's child's child",
            //       g.gschild?.map((gc) => React.createElement(
            //         g.tag,
            //         { className: gc.class, id: gc.id ,style:gc.styles },
            //         "child's child's child's child",


            //       ))


            //     ))


            //   ))

            // ))

          )}

        </div>

      ))}

    </div>
  );
}
