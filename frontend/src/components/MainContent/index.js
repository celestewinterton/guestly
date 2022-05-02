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
  const events = useSelector(state => state.events.events)
  const rsvps = useSelector(state => state.rsvps.rsvps)
  console.log("==========>", rsvps)

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
    dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  return (
    <div className='main-content-container'>
      <h2>Upcoming Events!</h2>
      {!events && <h3>Plan your event!</h3>}
      <div>
        {events ? <div><h3>Planning</h3><div>{
        events.map(event => <EventCard key={event.id} event={event} />
        )}</div>
        <div className='muted'>
          <a className='link center'>Plan another event?</a>
        </div></div> : null}
      </div>
      <div>
        {rsvps && events ? <div><h3>Attending</h3><div>{
        rsvps.map(rsvp => <RSVPCard key={rsvp.id} rsvp={rsvp} events={events} />
        )}</div></div> : null}
      </div>
      <div className='muted'>Don't see your event?
        <a className='link'>Search here</a>
      </div>
    </div>
  )
}

export default MainContent;
