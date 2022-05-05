import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import url from '../MainContent/images/proposal.jpeg';
import RSVPFormModal from '../RSVPFormModal';
import { useParams, useLocation } from 'react-router';
import { useHistory } from 'react-router';

function EventGuest() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events);
  const rsvps = useSelector(state => state.rsvps);
  const location = useLocation().pathname.split('/');

  let event;
  let rsvp;
  if (location[1] == 'events') {
    event = events[location[2]]
    rsvp = (Object.values(rsvps)?.filter(rsvp => rsvp?.eventId === event?.id)).find(rsvp => rsvp.userId === sessionUser.id)
  }
  if (location[1] == 'rsvps') {
    rsvp = rsvps[location[2]]
    event = events[rsvp?.eventId]
  }

  useEffect(() => {
    dispatch(rsvpActions.showRSVPs(rsvps));
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  const handleDelete = async (e, id) => {
    e.preventDefault();
    console.log("ID ===> ", id)
    await dispatch(rsvpActions.cancelCurrentRSVP(id));
    history.push("/events")
  }

  return (
    <div className='center'>
      <div className='large-card'>
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
            {rsvp ?
            <div>
              <div className='muted already-attending'>Already attending!</div>
              <div className='row-right-bottom'>
                <a className='link right-bottom pad-right'><NavLink className="unset" to={`/rsvps/${rsvp?.id}/edit`}>Edit »</NavLink></a>
                <a className='link right-bottom pad-right'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
                <button className="link unset right-bottom" onClick={(e) => handleDelete(e, rsvp.id)}>Cancel RSVP</button>
              </div>
            </div>
            : <RSVPFormModal />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventGuest;
