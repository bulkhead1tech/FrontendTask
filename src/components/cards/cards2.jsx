import React from "react";
import Minicard from "./minicard";
import "./css.css";
import { useState, useEffect } from "react";
const cards2 = ({ value }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch(
          `https://backendtask-lo61.onrender.com/tasks/?progress=true&search=${value}`
        );
        const data = await response.json();
        setdata(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, [value]);
  return (
    <div className="h-full w-full">
      <div className="h-12     py-2 w-full flex justify-center gap-x-3 items-center">
        <div className="h-2 w-2 rounded-full bg-[#FFA500]"></div>
        <h1 className="text-sm font-semibold">On Progress</h1>
        <div className="h-4 w-4  flex items-center justify-center text-[.75rem] font-semibold  rounded-full bg-gray-300">
          {" "}
          {data.length}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 bg-[#FFA500] h-1"></div>
      </div>
      <div className=" h-[calc(100%-3rem)] hide-scrollbar flex flex-col overflow-x-hidden px-8 py-5 gap-y-6 overflow-y-auto">
        {data.length != 0 ? (
          <>
            {data.map((data) => (
              <Minicard
                priority={data.priority}
                title={data.title}
                desc={data.description}
                date={new Date(data.deadline).toISOString().split("T")[0]}
                key={data._id}
                id={data._id}
              />
            ))}
          </>
        ) : (
          <>
            <h1>Data not found!!!</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default cards2;
