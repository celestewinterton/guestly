import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/wed.jpeg';

function RSVPCard({rsvp, events}) {
  const sessionUser = useSelector(state => state.session.user);
  const event = Object.values(events).find(event => event.id === rsvp.eventId)
  const myRSVP = sessionUser.id === rsvp.userId

  return (
    <div>
      {myRSVP ?
      <div className='card'>
        <div className='card-image'>
          <img className='card-image-format' src={url} alt='Wedding'></img>
        </div>
        <div className='right'>
          <ul className='rsvp-info'>
            <li><h3>{event?.name}</h3></li>
            <li className='muted'>{event?.date}</li>
            <li className='muted'>{rsvp?.selfDietary}</li>
            <li className='muted'>{rsvp?.plusOne}</li>
            <li className='muted'>{rsvp?.plusOneDietary}</li>
          </ul>
            <div><a className='link right-bottom'>More Details »</a></div>
        </div>
    </div> : null}
    </div>
  )
}

export default RSVPCard;
