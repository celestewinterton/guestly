import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarPage() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
      <h2>Calendar Page</h2>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default CalendarPage;
