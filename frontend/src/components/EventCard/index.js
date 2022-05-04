import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/proposal.jpeg';

function EventCard({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const myEvent = event?.userId === sessionUser?.id
  const events = useSelector(state => state.events)

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  return (
    <div>
      {myEvent ?
      <div className='card'>
        <div className='card-image'>
          <img className='card-image-format' src={url} alt='Wedding'></img>
        </div>
        <div className='right'>
          <ul className='event-info'>
            <li><h3><NavLink className="unset" to={`/events/${event.id}`}>{event?.name}</NavLink></h3></li>
            <li className='muted'>Date: {event?.date}</li>
            <li className='muted'>Address: 1234 Street Ave</li>
            <li className='muted'>City, CA, 95823</li>
          </ul>
            <div className='row-right-bottom'>
              <a className='link right-bottom pad-right'><NavLink className="unset" to={`/events/${event.id}/edit`}>Edit »</NavLink></a>
              <a className='link right-bottom'><NavLink className="unset" to={`/events/${event.id}`}>More Details »</NavLink></a>
            </div>
        </div>
      </div> : null}
    </div>
  )
}

export default EventCard;
