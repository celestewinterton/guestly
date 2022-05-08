import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import url from '../MainContent/images/proposal.jpeg';
import { useHistory } from 'react-router';

function Guestlist({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvps);
  const history = useHistory();
  const {eventId} = useParams();
  const eventRsvps = Object.values(rsvps)?.filter(rsvp => rsvp?.eventId === event.id);

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
      <div className='large-card-seating'>
        <div>
          <table className='guestlist-table'>
            <thead><h2>{event?.name} Guestlist</h2>
              <tr>
                <th>Guest Name</th>
                <th>Plus One</th>
                <th>Dietary (guest)</th>
                <th>Dietary (plus one)</th>
                <th>Count</th>
              </tr>
            </thead>
                {eventRsvps?.map(rsvp =>
                <tbody>
                  <td>{rsvp?.User?.fullname}</td>
                  <td>{rsvp?.plusOne}</td>
                  <td>{rsvp?.selfDietary}</td>
                  <td>{rsvp?.plusOneDietary}</td>
                  <td>{rsvp?.plusOne ? 2 : 1}</td>
                </tbody>
                )}
            </table>
        </div>
        <div className='large-card-table-foot'>
          <a className='link right-bottom pad-right'><NavLink className="unset" to={`/events/${event.id}/edit`}>Edit »</NavLink></a>
          <button className="link unset right-bottom pad-right" onClick={handleDelete}>Cancel Event »</button>
          <a className='link right-bottom'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
        </div>
      </div>
    </div>
  )
}

export default Guestlist;
