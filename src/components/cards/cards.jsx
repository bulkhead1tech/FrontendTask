import React from "react";
import Minicard from "./minicard";
import "./css.css";
import { useEffect, useState } from "react";
const cards = ({ value }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch(
          `https://backendtask-lo61.onrender.com/data?priority=0&priority=1&search=${value}`
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
    <div className="h-full">
      <div className="h-12 py-2 w-full flex justify-center gap-x-3 items-center">
        <div className="h-2 w-2 rounded-full bg-[#5030E5]"></div>
        <h1 className="text-sm font-semibold">To-do Task</h1>
        <div className="h-4 w-4  flex items-center justify-center text-[.75rem] font-semibold  rounded-full bg-gray-300">
          {data.length}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 bg-[#5030E5] h-1"></div>
      </div>
      <div className=" h-[calc(100%-3rem)] flex flex-col overflow-x-hidden px-8 py-5 gap-y-6 overflow-y-auto">
        {data.length != 0 ? (
          <>
            {data.map((data) => (
              <Minicard
                priority={data.priority}
                title={data.title}
                desc={data.description}
                date={new Date(data.deadline).toISOString().split("T")[0]}
                id={data._id}
                key={data._id}
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

export default cards;
