"use client"; 

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
      .then((data) => {
        setData(data);
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
    <div >
      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} >
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
