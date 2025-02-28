import React from "react";
import "./css.css";
import { useState, useEffect } from "react";
const minicard = ({ id, priority, title, desc, date }) => {
  const [first, setFirst] = useState("");
  const [priorit, setpriority] = useState("");
  const handle = async (e) => {
    const request = e.target.value;
    if(request!=10){
      const response = await fetch(`https://backendtask-lo61.onrender.com/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ request, id }),
      });
      const data = await response.json();
      alert(data.message);
    }else{
      const response = await fetch(`https://backendtask-lo61.onrender.com/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      alert(data.message);
    }
    window.location.reload();

    
  };

  useEffect(() => {
    const Priority = () => {
      switch (priority) {
        case 0:
          setFirst("#D58D49");
          setpriority("low");
          break;
        case 1:
          setFirst("#D8727D");
          setpriority("high");

          break;
        case 2:
          setFirst("#68B266");
          setpriority("completed");

          break;
          case 3:
            setFirst("#f56565");
            setpriority("expired");
  
            break;
        default:
          setFirst("#000000");
      }
    };
    Priority();
  }, [priority]);

  return (
    <div className="rectangle_1066 flex-shrink-0 w-full h-[9rem] py-2 rounded-2xl bg-white">
      <div className="flex w-full justify-between items-center  px-5 ">
        <h1
          style={{ color: first, backgroundColor: `${first}20` }}
          className="py-1 px-2 rounded-sm font-sans text-xs font-semibold leading-[normal]"
        >
          {priorit}
        </h1>{" "}
        <select
          onChange={handle}
          defaultValue={""}
          className="text cursor-pointer outline-none text-sm font-mono text-center w-10 text-[#0d062d] font-bold appearance-none"
        >
          <option value="" disabled selected>
            ...
          </option>
        {priority!=3 &&<> <option value="2">done</option>
          <option value="4">Start</option></>}
          <option value="10">Delete</option>
        </select>
      </div>

      <div className="w-full h-fit px-5 pt-1 flex flex-col pb-2 gap-y-2">
        <h1 className="text-[#0d062d] text-2xl   font-semibold font-sans leading-[normal]">
          {title}
        </h1>
        <p className="w-auto text-[#787486] font-['Inter'] text-xs leading-[normal]">
          {desc}{" "}
        </p>
        <div className="flex items-center gap-2.5 w-[16.3125rem]">
          <div className="flex flex-shrink-0 justify-between pb-5 items-center w-[7.5rem]">
            <h1 className="text-[#5a5a5a] font-semibold text-xs     ">
              {" "}
              Deadline:{" "}
            </h1>
            <h1 className="text-[#5a5a5a]  text-xs font-medium">{date}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default minicard;
