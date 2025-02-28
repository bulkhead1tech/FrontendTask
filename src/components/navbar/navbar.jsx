import React from "react";
import "./navbar.css";
const Navbar = ({ Setsearch, Filter }) => (
  <div className="frame_1171275878 w-full flex justify-between items-center self-stretch p-5 rounded-[1.25rem] bg-[#ecedee]">
    <div className="frame_25 flex flex-col justify-center items-start gap-2.5 py-2 px-3 w-[19.25rem] h-11 rounded-[1.375rem] bg-white">
      <div className="flex items-center gap-2 self-stretch">
        <div className="flex justify-center items-center p-px w-5 h-5">
          <button className="cursor-pointer">
            {" "}
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.16667 2.33333C4.94501 2.33333 2.33333 4.945 2.33333 8.16666C2.33333 11.3883 4.94501 14 8.16667 14C11.3883 14 14 11.3883 14 8.16666C14 4.945 11.3883 2.33333 8.16667 2.33333ZM0.666668 8.16666C0.666668 4.02453 4.02453 0.666664 8.16667 0.666664C12.3088 0.666664 15.6667 4.02453 15.6667 8.16666C15.6667 12.3088 12.3088 15.6667 8.16667 15.6667C4.02453 15.6667 0.666668 12.3088 0.666668 8.16666Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2858 12.2857C12.6112 11.9603 13.1388 11.9603 13.4643 12.2857L17.0893 15.9107C17.4147 16.2362 17.4147 16.7638 17.0893 17.0893C16.7638 17.4147 16.2362 17.4147 15.9108 17.0893L12.2858 13.4643C11.9603 13.1388 11.9603 12.6112 12.2858 12.2857Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="search_project opacity-[0.64] text-[#5a5a5a]  text-sm font-medium leading-[1.125rem]">
          <input
            type="text"
            onInput={(e) => Setsearch(e.target.value)}
            className="w-full py-1 text-black outline-none"
            placeholder="Search Project"
          />
        </div>
      </div>
    </div>
    <div className="inline-flex items-center gap-2 p-2.5  rounded-[0.3125rem] border border-[#625f6d] bg-white">
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.60006 1.00001H12.4001C13.1334 1.00001 13.7334 1.60001 13.7334 2.33334V3.80001C13.7334 4.33334 13.4001 5.00001 13.0667 5.33334L10.2001 7.86667C9.80006 8.20001 9.53339 8.86667 9.53339 9.40001V12.2667C9.53339 12.6667 9.26672 13.2 8.93339 13.4L8.00006 14C7.13339 14.5333 5.93339 13.9333 5.93339 12.8667V9.33334C5.93339 8.86667 5.66672 8.26667 5.40006 7.93334L2.86672 5.26667C2.53339 4.93334 2.26672 4.33334 2.26672 3.93334V2.40001C2.26672 1.60001 2.86672 1.00001 3.60006 1.00001Z"
          stroke="#797979"
          strokeWidth="1.3"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <select
        onChange={(e) => Filter(e.target.value)}
        className="outline-none cursor-pointer"
      >
        <option value="0">Filter</option>
        <option value="1">Progress</option>
        <option value="2">Completed</option>
        <option value="3">Expired</option>

      </select>
    </div>
  </div>
);

export default Navbar;
