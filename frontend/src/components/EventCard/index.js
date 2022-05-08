import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/proposal.jpeg';

function EventCard({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const myEvent = event?.userId === sessionUser?.id

  return (
    <div>
      {myEvent ?
      <div className='card'>
        <div className='card-image'>
          <img className='card-image-format' src={event?.image ? event.image : url} alt='Wedding'></img>
        </div>
        <div className='right'>
          <ul className='event-info'>
            <li><h3><NavLink className="unset" to={`/events/${event.id}`}>{event?.name}</NavLink></h3></li>
            <li className='muted'>Date: {event?.date.slice(0, 10)}</li>
            <li className='muted'>Venue: {event?.Venue ? event?.Venue?.name : "Coming soon"}</li>
            <li className='muted'>Address: {(event?.Venue && event?.Venue?.address) ?
            <>{event?.Venue?.address} <br/>{event?.Venue?.city}, {event?.Venue?.state} {event?.Venue?.zipcode}</>
            : "Coming soon"}</li>
          </ul>
          <div className='row-right-bottom'>
            <a className='link right-bottom pad-right'><NavLink className="unset" to={{pathname: `/events/${event.id}/edit`, event: {event}}}>Edit »</NavLink></a>
            <a className='link right-bottom'><NavLink className="unset" to={{pathname: `/events/${event.id}`, event: {event}}}>More Details »</NavLink></a>
          </div>
        </div>
      </div> : null}
    </div>
  )
}

export default EventCard;
