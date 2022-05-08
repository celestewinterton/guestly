import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import * as eventActions from '../../store/events';
import EventGuest from './EventGuest';
import EventPlanner from './EventPlanner';
import Guestlist from './Guestlist';
import SeatingConfig from '../SeatingConfig';
import './EventDetail.css'

function EventDetail() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const {eventId} = useParams();
  const events = useSelector(state => state.events)
  const event = Object.values(events)?.find(event => event.id === parseInt(eventId))
  let host = event?.userId === sessionUser?.id;
  const [showEvent, setShowEvent] = useState(true);
  const [showGuests, setShowGuests] = useState(false);
  const [showSeating, setShowSeating] = useState(false);

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div>
      {host ?
      <>
        <div className='large-card-nav'>
            <button className='nav-button' onClick={() => {
              setShowEvent(true)
              setShowGuests(false)
              setShowSeating(false)
            }}>My Event</button>
            <button className='nav-button' onClick={() => {
              setShowEvent(false)
              setShowGuests(true)
              setShowSeating(false)
            }}>Guestlist</button>
            {/* HIDE LATER */}
            {/* <button className='nav-button' onClick={() => {
              setShowEvent(false)
              setShowGuests(false)
              setShowSeating(true)
            }}>Seating</button> */}
        </div>
        {showEvent && <EventPlanner event={event}/>}
        {showGuests && <Guestlist event={event}/>}
        {/* HIDE LATER */}
        {/* {showSeating && <SeatingConfig event={event}/>} */}
      </>
      :
      <>
        <div className='large-card-nav'>
          <button className='transparent nav-button'>Nav</button>
        </div>
        <EventGuest event={event}/>
      </>}
    </div>
  )
}

export default EventDetail;
