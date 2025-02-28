import React, { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DatePicker = ({setDeadline}) => {
  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(""); 
   useEffect(() => {
    flatpickr(datePickerRef.current, {
      dateFormat: "Y-m-d",
      theme: "light", 
      onChange: (selectedDates) => {
        const date = formatDate(selectedDates[0])
        setSelectedDate(date);
        setDeadline(date)
        }
    });
 
    
    

    const calendarContainer = document.querySelector(".flatpickr-calendar");
    if (calendarContainer) {
      calendarContainer.style.backgroundColor = "white";
      calendarContainer.style.color = "black";

    }
  }, []);
  useEffect(() => {
    
    console.log(selectedDate)

  }, [selectedDate])
  
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="">
      <input
        ref={datePickerRef}
        type="text"
        placeholder="Deadline"
        className="text-sm text-gray-500 font-bold outline-none rounded-lg cursor-pointer placeholder:text-gray-500"
      />
    </div>
  );
};

export default DatePicker;