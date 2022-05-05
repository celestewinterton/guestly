import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import url from '../MainContent/images/proposal.jpeg';

function EventPlanner({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvp);

  useEffect(() => {
    dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  return (
    <div className='center'>
      <div className='large-card'>
        <div className='nav-left'>
          <nav>
            <NavLink className='nav-button' to="">Guestlist</NavLink>
            <NavLink className='nav-button' to="">Seating</NavLink>
            <NavLink className='nav-button' to="">Registry</NavLink>
          </nav>

        </div>
        <div className='card-image'>
          <img className='card-image-format' src={event?.image ? event.image : url} alt='Wedding'></img>
        </div>
        <div className='right'>
          <ul className='event-info'>
            <li><h3><NavLink className="unset" to={`/events/${event?.id}`}>{event?.name}</NavLink></h3></li>
            <li className='muted'>Date: {event?.date}</li>
            <li className='muted'>Address: 1234 Street Ave</li>
            <li className='muted'>City, CA, 95823</li>
          </ul>
            <div className='row-right-bottom'>
              <a className='link right-bottom pad-right'><NavLink className="unset" to={`/events/${event.id}/edit`}>Edit »</NavLink></a>
              <a className='link right-bottom'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPlanner;
