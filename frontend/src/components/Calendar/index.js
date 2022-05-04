import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

function CalendarPage() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }
  console.log("===>", value)

  return (
    <div className='calendar-container'>
      <div className='card'>
        <h2>Calendar Page</h2>
        <Calendar
          onChange={onChange}
          value={value}
        />
        <div>
          <h2>Event Name</h2>
          <div>Event details........</div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
