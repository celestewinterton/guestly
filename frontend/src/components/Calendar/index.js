import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  function onChange(nextValue) {
    setDate(nextValue);
  }
  console.log("===>", date)

  return (
    <div className='calendar-container'>
      <div className='card'>
        <h2>Calendar Page</h2>
        <Calendar
          onChange={onChange}
          value={date}
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
