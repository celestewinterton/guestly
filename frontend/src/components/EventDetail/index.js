import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/proposal.jpeg';
import EventGuest from './EventGuest';
import EventPlanner from './EventPlanner';
import './EventDetail.css'

function EventDetail() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const {eventId} = useParams();
  const events = useSelector(state => state.events)
  const event = Object.values(events)?.find(event => event.id === parseInt(eventId))
  let myEvent = event?.userId === sessionUser?.id

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  return (
    <div>
      {myEvent ? <EventGuest event={event} />
      : <EventPlanner event={event} />}
    </div>
  )
}

export default EventDetail;
