import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/wed.jpeg';
import { NavLink } from 'react-router-dom';

function RSVPCard({rsvp}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events)
  const event = Object.values(events)?.find(event => event.id === rsvp.eventId)
  const myRSVP = sessionUser?.id === rsvp?.userId;

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
            <li className='muted'>Date: {event?.date.slice(0, 10)}</li>
            <li className='muted'>Venue: {event?.Venue ? event?.Venue?.name : "Coming soon"}</li>
            <li className='muted'>Address: {event?.Venue ?
            <>{event?.Venue?.address} <br/>{event?.Venue?.city}, {event?.Venue?.state} {event?.Venue?.zipcode}</>
            : "Coming soon"}</li>
            <li className='muted'>{rsvp?.plusOne ? <>+ 1: {rsvp?.plusOne}</> : null}</li>
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
