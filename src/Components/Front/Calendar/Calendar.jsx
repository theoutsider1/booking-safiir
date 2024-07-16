import React, { useState, useEffect } from 'react';
import { Calendar as ModernCalendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a PrimeReact theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import TestCalendar from './TestCalendar';
import axios from 'axios';
function Calendar({handleChange, handleNext}) {
    const defaultValue = {
        year: 2024,
        month: 6,
        day: 19,
    };

    const [selectedDay, setSelectedDay] = useState(defaultValue);
    const [randomTimes, setRandomTimes] = useState([]);
    const [dateState, setDateState] = useState(false)
    const [rangeTimes, setRangeTimes] = useState([])
    useEffect(() => {
        const getTimes = async () => {
            const response = await axios.get(`http://localhost:8000/api/time`)
            console.log(response.data);
            setRangeTimes(response.data)
        }
        getTimes()
    }, [])
    
    
    const generateTimes = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const formattedHour = hour.toString().padStart(2, '0');
                const formattedMinute = minute.toString().padStart(2, '0');
                times.push(`${formattedHour}:${formattedMinute}`);
            }
        }
        return times;
    };

    const times = generateTimes();

    const getRandomTimes = () => {
        const shuffled = [...times].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 16);
    };

    const handleDateChange = (e) => {
        setSelectedDay(e.value);
        setRandomTimes(getRandomTimes());
    };

    const today = new Date();
    // new
    const handleDate = (date)=>{
        handleChange('date', date)
        setDateState(true)
    }
    //new
    const handleTime =(timeDate)=>{
        handleChange('time',timeDate);
        handleNext()
    }
    

    return (
        <div className='flex flex-col md:flex-row w-full'>
            <div className="pt-5 flex flex-col gap-4 sm:gap-8 mx-4 sm:mx-24 md:mx-0 md:flex-row md:space-x-5 rtl:space-x-reverse  md:w-full">
                <div className='w-full pt-4 sm:p-8 flex justify-center border rounded-lg shadow-md md:w-1/2 rtl:justify-end' dir='ltr'>
                
                    <TestCalendar handleDate={handleDate}/>

                </div>

                 {/*  Time Choices  */}

                <div className= {`w-full flex flex- justify-center border gap-4 rounded-lg shadow-md md:p-6 md:w-1/2 sm:p-2 mt-5 sm:mt-0`}>

                        {/* Time header */}
                            {/* Time choices buttons  */}
                        <div className='mt-1.5 flex flex-col justify-center items-center gap-3 sm:gap-3 w-full'>
                            {rangeTimes.map((rangeTime) => {
                                return (
                                    <button 
                                        className={`w-3/4 flex flex-col px-1.5 text-[#0d2252]  rounded-full border-[#0d2252] py-2  sm:w-3/4  justify-center items-center  border-2
                                        ${!dateState ? 'cursor-not-allowed opacity-50' : 'hover:shadow-inner hover:shadow-neutral-200 shadow-md '}`} 
                                        disabled={!dateState}
                                        onClick={()=>handleTime(rangeTime.id)}
                                    >
                                        <div className=''>
                                            <span className='text-sm sm:px-6 font-bold'>{rangeTime.ar_label}</span>                                    
                                        </div>
                                        <div>
                                            <span className='text-sm sm:text-sm font-semibold'>{rangeTime.start_time}</span>
                                            <i className="pi pi-arrow-right px-1.5 rtl:rotate-180" style={{ fontSize: '1rem' }}></i>
                                            <span className='sm:px-2 text-sm font-semibold'>{rangeTime.end_time}</span>   
                                        </div>
                                    </button>
                                )
                            })}

                            
                        </div>
                      
                    
                    </div>
            </div>
        </div>
    );
}

export default Calendar;
