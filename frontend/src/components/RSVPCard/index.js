import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/wed.jpeg';
import { NavLink } from 'react-router-dom';

function RSVPCard({rsvp}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events)
  const event = Object.values(events).find(event => event.id === rsvp.eventId)
  const myRSVP = sessionUser.id === rsvp.userId;

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  return (
    <div>
      {myRSVP ?
      <div className='card'>
        <div className='card-image'>
          <img className='card-image-format' src={event?.image ? event.image : url} alt='Wedding'></img>
        </div>
        <div className='right'>
          <ul className='rsvp-info'>
            <li><h3>{event?.name}</h3></li>
            <li className='muted'>{event?.date}</li>
            <li className='muted'>{rsvp?.selfDietary}</li>
            <li className='muted'>{rsvp?.plusOne}</li>
            <li className='muted'>{rsvp?.plusOneDietary}</li>
          </ul>
          <div className='row-right-bottom'>
              <a className='link right-bottom pad-right'><NavLink className="unset" to={{pathname: `/rsvps/${rsvp?.id}/edit`, rsvp: {rsvp}}}>Edit »</NavLink></a>
              <a className='link right-bottom'><NavLink className="unset" to={{pathname: `/rsvps/${rsvp?.id}`, rsvp: {rsvp}}}>More Details »</NavLink></a>
          </div>
        </div>
      </div> : null}
    </div>
  )
}

export default RSVPCard;
