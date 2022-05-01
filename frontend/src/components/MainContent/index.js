import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SplashPage from '../SplashPage';
import "./MainContent.css"
import * as eventActions from '../../store/events';

function MainContent({isLoaded}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events)
  console.log("==========>", events)

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
  }, [dispatch])

  let content;
  if (sessionUser) {
    content = (
    <div className='main-content-container'>
      <h2>Upcoming Events!</h2>
      {events && <div><button className='add-plus'> + </button>
      {events.map(event => (
      <ul className='event-card'>
        <li><h3>{event.name}</h3></li>
        <li className='muted'>Date: {event.date}</li>
        <li className='muted'>Address: 1234 Street Ave</li>
        <li className='muted'>City, CA, 95823</li>
      </ul>
      ))}</div>}
      <div className='muted'>Don't see your event? Search <a href="/search" className='link'>here</a> or <a href="" className='link'>plan a new event!</a></div>
    </div>
    )
  } else {
    content = (<SplashPage />)
  }

  return (
    <div className='main-content-container'>
      {isLoaded && content}
    </div>
  )
}

export default MainContent;
