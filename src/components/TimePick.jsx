import React, { useState } from 'react';

const TimePick = ({setHour,setMinute,setam}) => {
  

  return (
    <div className='flex w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring'>
       
       <select name="hours" onChange={(e)=>{setHour(e.target.value)}} className='border '>
        <option value="">00</option>
         {
             Array(12).fill(0).map((_, i) => (
            <option value={(i + 1) < 10? `0${i + 1}` : i + 1}>{(i + 1) < 10? `0${i + 1}` : i + 1}</option>
            ))
        }
      </select>
        <span>:</span>
       <select name="minutes" onChange={(e)=>{setMinute(e.target.value)}} className='border'>
        <option value="">00</option>
         {
             Array(60).fill(0).map((_, i) => (
            <option value={(i + 1) < 10? `0${i + 1}` : i + 1}>{(i + 1) < 10? `0${i + 1}` : i + 1}</option>
            ))
        }
      </select>
      <select name="minutes" onChange={(e)=>{setam(e.target.value)}} className='border'>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default TimePick;
