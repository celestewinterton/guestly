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

  let content;
  // if (sessionUser) {
  //   content = (
  //   <div className='main-content-container'>
  //     <h2>Upcoming Events!</h2>
  //     {events && <div><button className='add-plus'> + </button>
  //     {events.map(event => (
  //     <ul className='event-card'>
  //       <li><h3>{event?.name}</h3></li>
  //       <li className='muted'>Date: {event?.date}</li>
  //       <li className='muted'>Address: 1234 Street Ave</li>
  //       <li className='muted'>City, CA, 95823</li>
  //     </ul>
  //     ))}</div>}
  //     <div className='muted'>Don't see your event? Search <a href="/search" className='link'>here</a> or <a href="" className='link'>plan a new event!</a></div>
  //   </div>
  //   )
  // } else {
  //   content = (<SplashPage />)
  // }

  return (
    <div className='main-content-container'>
      {/* {isLoaded && content} */}
      <h2>Upcoming Events!</h2>
      <div>
        {events ? <div><h3>Planning</h3><div>{
        events.map(event => <EventCard event={event}/>
        )}</div></div> : null}
      </div>
      <div>
        {rsvps ? <div><h3>Attending</h3><div>{
        rsvps.map(rsvp => <RSVPCard rsvp={rsvp}/>
        )}</div></div> : null}
      </div>
    </div>
  )
}

export default MainContent;
