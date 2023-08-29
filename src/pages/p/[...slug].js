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
    <div>

      {data.ui.root.map((element) => (

        <div>
          {console.log(data)}
          {React.createElement(
            element.tag,
            { class: element.class, id: element.id },
            element.content, element.target,
            element.children?.map((ik) => React.createElement(
              ik.tag,
              { className: ik.class, id: ik.id },
              "children",
              ik.child?.map((i) => React.createElement(
                i.tag,
                { className: i.class, id: i.id },
                "child",
                i.childschild?.map((ai) => React.createElement(
                  ai.tag,
                  { className: ai.class, id: ai.id },
                  "child's child",
                  ai.gs?.map((g) => React.createElement(
                    g.tag,
                    { className: g.class, id: g.id },
                    "child's child's child",
                    g.gschild?.map((gc) => React.createElement(
                      g.tag,
                      { className: gc.class, id: gc.id },
                      "child's child's child's child",
  
  
                    ))
  

                  ))


                ))

              ))


            ))


          )}

        </div>

      ))}

    </div>
  );
}
