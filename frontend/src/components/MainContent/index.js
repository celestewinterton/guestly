import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SplashPage from '../SplashPage';
import "./MainContent.css"
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import EventCard from '../EventCard';
import RSVPCard from '../RSVPCard';
import { Route } from 'react-router';

function MainContent({isLoaded}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events)
  const rsvps = useSelector(state => state.rsvps.rsvps)
  console.log("==========>", events)

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
    dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  return (
    <div className='main-content-container'>
      <h2>Upcoming Events!</h2>
      {!events && <NavLink to='/events/new'>
          <div className='muted'>
            <a className='link center'>Plan an event!</a>
          </div>
      </NavLink>}
      <div>
        {events ? <div><h3>Planning</h3><div>{
        Object.values(events).map(event => <EventCard key={event.id} event={event} />
        )}</div>
          <NavLink to='/events/new'>
            <div className='muted'>
              <a className='link center'>Plan another event?</a>
            </div>
          </NavLink>
        </div> : null}
      </div>
      <div>
        {rsvps && events ? <div><h3>Attending</h3><div>{
        rsvps.map(rsvp => <RSVPCard key={rsvp.id} rsvp={rsvp} events={events} />
        )}</div></div> : null}
      </div>
      <div className='muted'>Don't see your event?
      <a className='link'><span> </span>Search here</a>
      </div>
    </div>
  )
}

export default MainContent;
