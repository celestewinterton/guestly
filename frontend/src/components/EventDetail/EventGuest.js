import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import url from '../MainContent/images/proposal.jpeg';

function EventGuest({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvps);
  const rsvp = Object.values(rsvps)?.find(rsvp => rsvp.eventId === event.id);
  // console.log("GUEST VIEW =====>", rsvps, rsvp)

  useEffect(() => {
    dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  return (
    <div className='center'>
      <div className='large-card'>
        <div className='card-image'>
          <img className='card-image-format' src={url} alt='Wedding'></img>
        </div>
        <div className='right'>
          <ul className='event-info'>
            <li><h3><NavLink className="unset" to={`/events/${event?.id}`}>{event?.name}</NavLink></h3></li>
            <li className='muted'>Date: {event?.date}</li>
            <li className='muted'>Address: 1234 Street Ave</li>
            <li className='muted'>City, CA, 95823</li>
          </ul>
            <div className='row-right-bottom'>
            {rsvp ?
            <div>
              <div className='muted already-attending'>Already attending!</div>
              <div className='row-right-bottom'>
                <a className='link right-bottom pad-right'><NavLink className="unset" to={`/events/${event.id}/edit`}>Edit »</NavLink></a>
                <a className='link right-bottom'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
              </div>
            </div>
            : <div className='row-right-bottom'><button className='teal-button'>RSVP</button></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventGuest;
