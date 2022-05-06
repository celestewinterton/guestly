import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  let host = event?.userId === sessionUser?.id

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  return (
    <div>
      {host ? <><EventPlanner event={event} /></>
      : <EventGuest event={event} />}
    </div>
  )
}

export default EventDetail;
