import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import url from '../MainContent/images/proposal.jpeg';
import { useHistory } from 'react-router';

function EventPlanner({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvp);
  const history = useHistory();
  const {eventId} = useParams();

  useEffect(() => {
    dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(eventActions.cancelCurrentEvent(eventId));
    history.push("/events")
  }

  return (
    <div className='center'>
      <div className='large-card'>
        <div className='large-card-image'>
          <img className='event-image-format' src={event?.image ? event.image : url} alt='Wedding'></img>
        </div>
        <div className='large-card-main'>
          <ul className='event-info'>
            <li><h2><NavLink className="unset" to={`/events/${event?.id}`}>{event?.name}</NavLink></h2></li>
            <li className='muted'>Date: {event?.date.slice(0, 10)}</li>
            <li className='muted'>Venue: {event?.Venue ? event?.Venue?.name : "TBD"}</li>
            <li className='muted'>Address: {event?.Venue ?
            <>{event?.Venue?.address} <br/>{event?.Venue?.city}, {event?.Venue?.state} {event?.Venue?.zipcode}</>
            : "TBD"}</li>
            <li className='muted'><br/>Details: {event?.details}</li>
            <li className='muted'>Dresscode: {event?.dresscode}</li>
          </ul>
        </div>
        <div className='large-card-nav'>
            <NavLink className='nav-button' to="">Guestlist</NavLink>
            {/* <NavLink className='nav-button' to="">Seating</NavLink> */}
            {/* <NavLink className='nav-button' to="">Registry</NavLink> */}
        </div>
        <div className='large-card-foot'>
          <a className='link right-bottom pad-right'><NavLink className="unset" to={`/events/${event.id}/edit`}>Edit »</NavLink></a>
          <button className="link unset right-bottom pad-right" onClick={handleDelete}>Cancel Event »</button>
          <a className='link right-bottom'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
        </div>
      </div>
    </div>
  )
}

export default EventPlanner;
