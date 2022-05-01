import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as eventActions from '../../store/events';

function EventCard({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  // const events = useSelector(state => state.events)
  // console.log("********", event)
  // useEffect(() => {
  //   dispatch(eventActions.showAllEvents(events));
  // }, [dispatch])

  return (
    <div className='card'>
      <ul className='event-card'>
        <li><h3>{event?.name}</h3></li>
        <li className='muted'>Date: {event?.date}</li>
        <li className='muted'>Address: 1234 Street Ave</li>
        <li className='muted'>City, CA, 95823</li>
      </ul>
    </div>
  )
}

export default EventCard;
