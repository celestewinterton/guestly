import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as eventActions from '../../store/events';

function RSVPCard({rsvp}) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='card'>
      <ul className='event-card'>{rsvp.id}
        <li>{rsvp.selfDietary}</li>
        <li>{rsvp.plusOne}</li>
        <li>{rsvp.plusOneDietary}</li>
        <li>{rsvp.eventId}</li>
      </ul>
    </div>
  )
}

export default RSVPCard;
