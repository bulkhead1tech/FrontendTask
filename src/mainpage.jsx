import React from "react";
import Minifr from "./components/minifr";
import Navbar from "./components/navbar/navbar";
import Cards from "./components/cards/cards";
import Cards2 from "./components/cards/cards2";
import Cards3 from "./components/cards/cards3";
import Cards4 from "./components/cards/cards4";

import { useState, useEffect } from "react";
import "./app.css";
import Form from "./components/cform/form";
const mainpage = () => {
  const [add, setadd] = useState(false);
  const [data, setdata] = useState([]);
  const [completed, setcompleted] = useState(0);
  const [active, setactive] = useState(0);
  const [expired, setexpired] = useState(0);
  const [search, setsearch] = useState("");
  const [filter, setfilter] = useState(0);

  const handler = () => {
    setactive(
      data.filter((val) => val.priority === 0 || val.priority === 1).length
    );
    setcompleted(data.filter((val) => val.priority === 2).length);
    setexpired(data.filter((val) => val.priority === 3).length);
  };

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch("https://backendtask-lo61.onrender.com/counter");
        const data = await response.json();
        setdata(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, []);
  useEffect(() => {
    handler();
  }, [data]);
  const update = () => {
    setadd(!add);
    window.location.reload();
  };
  return (
    <>
      <div className="h-1/6 px-10 py-2 flex items-center justify-center">
        <Navbar Setsearch={setsearch} Filter={setfilter} />
      </div>
      <div className="h-5/6 gap-x-14 bg-white w-full p-5 flex">
        <div className="h-full w-1/4 flex flex-col gap-y-5 pt-8 px-10  bg-white">
          <div className="h-full w-full flex flex-col items-center justify-center px-5 gap-y-5">
            <Minifr count={1} type={"Expired tasks"} value={expired} />
            <Minifr count={2} type={"All active tasks"} value={active} />
            <Minifr count={3} type={"Completed tasks"} value={completed} />
          </div>
          <button
            onClick={() => setadd(!add)}
            className="bg-black cursor-pointer text-sm rounded-full text-white py-3"
          >
            + Add Task
          </button>
        </div>
        <div className="h-full w-3/4 px-5 py-8 flex justify-center items-center overflow-x-auto gap-x-10">
        <div className="h-full w-full gap-y-1" >
          <div className="w-full h-full flex custom-scrollbar  overflow-y-hidden overflow-x-auto gap-x-10">
  {!add ? (
    <>
      {filter == 0 ? (
        <>
          <div className="bg-[#ECEDEE] rounded-3xl flex-shrink-0 w-1/3"> 
            <Cards value={search} />
          </div>
          <div className="bg-[#ECEDEE] rounded-3xl flex-shrink-0  w-1/3">
            <Cards2 value={search} />
          </div>
          <div className="bg-[#ECEDEE] rounded-3xl flex-shrink-0 w-1/3">
            <Cards3 value={search} />
          </div>
          <div className="bg-[#ECEDEE] rounded-3xl flex-shrink-0  w-1/3">
            <Cards4 value={search} />
          </div>
        </>
      ) : (
        <>
          {filter == 1 ? (
            <>
              <div className="bg-[#ECEDEE] rounded-3xl flex-shrink-0  w-1/3">
                <Cards2 value={search} />
              </div>
            </>
          ) : (
            <>
             {filter == 2 ? (

              <div className="bg-[#ECEDEE] rounded-3xl flex-shrink-0  w-1/3">
                <Cards3 value={search} />
              </div>):(<> <div className="bg-[#ECEDEE] rounded-3xl flex-shrink-0  w-1/3">
                <Cards4 value={search} />
              </div></>)}
            </>
          )}
        </>
      )}
    </>
  ) : (
    <>
      <Form update={update} />
    </>
  )}
  </div>
  <h1>//Task dated today and before will be considered expired</h1>

  </div>
</div>
      </div>
    </>
  );
};

export default mainpage;
