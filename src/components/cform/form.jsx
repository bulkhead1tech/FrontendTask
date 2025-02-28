import React, { useState } from "react";
import DatePicker from "./dater";
import Taskalert from "../taskalert/taskalert";

const Form = ({ update }) => {
  const [popop, setpopop] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [deadline, setdeadline] = useState("");
  const [message, setmessage] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a task name.");
      return;
    }
    if (!description) {
      alert("Please enter task details.");
      return;
    }
    if (!deadline) {
      alert("Please select a deadline.");
      return;
    }

    const formData = {
      title,
      description,
      deadline,
      priority: e.target.priority.value,
    };
    const fetcher = async () => {
      try {
        const response = await fetch("https://backendtask-lo61.onrender.com/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        setmessage(data.message)
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
    settitle("");
    setdescription("");
    setdeadline("");
    setpopop(!popop);
  };

  return (
    <>
      {!popop ? (
        <div className="h-3/5 w-1/4 absolute left-1/2 top-1/4 border-2 rounded-xl p-2 border-black flex flex-col items-center">
          <div className="flex h-14 w-full items-center justify-between px-3">
            <div className="flex h-full gap-x-3 justify-center items-center ">
              <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
              <h1 className="text-xl font-semibold">ADD TASK</h1>
            </div>
            <div className="text-purple-950 text-lg">+</div>
          </div>
          <div className="w-full h-[0.5px] bg-gray-400"></div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-[calc(100%-3.5rem)] px-5 py-5"
          >
            <div className="h-1/6 w-full flex justify-between px-1 gap-x-2">
              <input
                type="text"
                className="w-full h-full py-3 outline-none"
                placeholder="Task name"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                required
              />
              <select
                name="priority"
                className="outline-none appearance-none cursor-pointer text-center rounded-full hover:bg-gray-200"
                required
              >
                <option value="" disabled selected>
                  :
                </option>
                <option value="0">low</option>
                <option value="1">high</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="w-full h-1 mt-2 bg-black"></div>
              <div className="h-[15rem] w-full">
                <input
                  type="text"
                  className="h-[12rem] w-full mt-4 p-3 outline-none"
                  placeholder="Task details here!"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  required
                />
              </div>
              <div className="h-1/6 w-full flex mb-4 justify-between items-center">
                <DatePicker setDeadline={setdeadline} />
                <button
                  type="submit"
                  className="text-sm text-gray-500 font-bold cursor-pointer"
                >
                  Assign
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Taskalert update={update} message={message}/>
      )}
    </>
  );
};

export default Form;
