import React, { useState } from 'react';

function TestCalendar ({handleDate})  {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startOfWeek = new Date(startOfMonth);
  startOfWeek.setDate(startOfMonth.getDate() - startOfMonth.getDay());
  const endOfWeek = new Date(endOfMonth);
  endOfWeek.setDate(endOfMonth.getDate() + (6 - endOfMonth.getDay()));

  const daysInMonth = [];
  let date = new Date(startOfWeek);

  while (date <= endOfWeek) {
    daysInMonth.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const formatDate = (date) => {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
    
  };

  const formatDay = (date) => {
    return date.getDate();
  };

  const handleDayClick = (date) => {
    if (!isPastDate(date)) {
      setSelectedDate(date);
    }
  };
// function that 
  const storeDate = (date)=>{
    handleDayClick(date)
    handleDate(date)
  }
// pi-arrow-circle-right
  const isSameDay = (date1, date2) => {
    return date1 && date2 && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  };

  const isPastDate = (date) => {
    const today = new Date();
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  return (
    <div className='md:flex md:flex-col'>
      <div className="flex justify-between items-center sm:px-8 pb-4 text-[#0d2152]  border-b">
        <button onClick={prevMonth} className="text-xl font-bold">
          <i className="pi pi-arrow-circle-left px-1.5 " style={{ fontSize: '1.25rem' }}></i>
        </button>
        <h2 className="text-xl font-bold ">{formatDate(currentDate)}</h2>
        <button onClick={nextMonth} className="font-bold"> 
          <i className="pi pi-arrow-circle-right px-1.5 " style={{ fontSize: '1.25rem' }}></i>
        </button>
      </div>
    <div className=" flex flex-col justify-center sm:gap-2 text-[#0d2152] m-4">
     
      <div>
        <div className="grid grid-cols-7 justify-items-center gap-2 sm:gap-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="px-4 sm:px-0 text-base sm:text-center font-semibold ">{day}</div>
          ))}
          {daysInMonth.map((day, index) => (
            <div
              key={index}
              className={`text-center w-6 sm:w-12 h-6 rounded-xl cursor-pointer ${day.getMonth() === currentDate.getMonth() ? '' : 'text-gray-400'} ${isSameDay(day, selectedDate) ? 'bg-[#0d2152] text-white ' : ''} ${isPastDate(day) ? 'text-gray-300 cursor-not-allowed' : ''}`}
              onClick={() => storeDate(day)}
            >
              {formatDay(day)}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestCalendar;
