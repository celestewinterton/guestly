import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import * as eventActions from '../../store/events';
import './Calendar.css'
import 'react-calendar/dist/Calendar.css';
import url from '../MainContent/images/proposal.jpeg';

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const events = useSelector(state => state.events)
  const dispatch = useDispatch();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let dbDate = `${year}-${(month < 10) ? `0${month}` : month}-${(day < 10) ? `0${day}` : day}`
  const thisDate = Object.values(events)?.filter(event => dbDate == event.date.slice(0, 10))

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  function onChange(nextValue) {
    setDate(nextValue);
  }

  return (
    <div className='calendar-container'>
      <div className='card'>
        <h2>Calendar Page</h2>
        <Calendar
          onChange={onChange}
          value={date}
        />
        <div>
          <div>{thisDate.length ?
          <div className='right'>{thisDate.map(event =>
            <ul className='event-info'>
              <a className='unset' href={`/events/${event?.id}`}><h2>{event?.name}</h2></a>
              <img className='card-image-format' src={event?.image ? event.image : url} alt='Wedding'></img>
              <li>Address: {event?.address}</li>
              <li>Details: {event?.details}</li>
              <li>Dresscode: {event?.dresscode}</li>
            </ul>)}
          </div>
          : <h2>No events this day</h2>}</div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
