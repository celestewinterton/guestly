import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import * as eventActions from '../../store/events';
import EventGuest from './EventGuest';
import EventPlanner from './EventPlanner';
import './EventDetail.css'

function EventDetail() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const {eventId} = useParams();
  const events = useSelector(state => state.events)
  const event = Object.values(events)?.find(event => event.id === parseInt(eventId))
  let host = event?.userId === sessionUser?.id;
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  return (
    <div>
      {host ?
      <>
        <div className='large-card-nav'>
            <div className='nav-button'>My Event</div>
            <div className='nav-button'>Guestlist</div>
            {/* <NavLink className='nav-button' to="">Seating</NavLink> */}
            {/* <NavLink className='nav-button' to="">Registry</NavLink> */}
        </div>
        <EventPlanner event={event} />
      </>
      : <EventGuest event={event} />}
    </div>
  )
}

export default EventDetail;
