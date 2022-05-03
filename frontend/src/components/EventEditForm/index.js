import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/proposal.jpeg';

function EventEditForm() {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const {eventId} = useParams();
  const events = useSelector(state => state.events.events)
  const event = events.find(event => event.id === parseInt(eventId))
  let myEvent = event.userId === sessionUser.id

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])


  return (
    <div>
      <div className="edit-form-container">
        <div>Event Edit Form</div>
      </div>
    </div>
  )
}

export default EventEditForm;
