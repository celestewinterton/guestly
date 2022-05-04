import { useSelector } from 'react-redux';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Search = ({query, setSearchResults}) => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events)
  // const rsvps = useSelector(state => state.rsvps)

  const eventResults = Object.values(events)?.filter(
    event => event.name?.toLowerCase().includes(query?.toLowerCase())
  );

  const formatResult = result => {
    const index = result.toUpperCase().indexOf(query?.toUpperCase());
    const len = query.length;

    const subStringOne = result.slice(0, index);
    const match = result.slice(index, index + len);
    const subStringTwo = result.slice(index+len);

    return (
        <span>{subStringOne}<span className='match'>{match}</span>{subStringTwo}</span>
    )
  }

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
    // dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  return (
    <div className='card'>
      <div className='search-results'
      onClick={e=>e.stopPropagation()}>
        <h4>Events</h4>
          <ul>{eventResults.length ? eventResults.map(event =>
            <li key={`event-${event.id}`}>
              <NavLink className='unset link' to={`/events/${event.id}`} onClick={e=>setSearchResults(false)}>
                {formatResult(event.name)}
              </NavLink>
            </li>)
          : null }</ul>
        <h4>Events</h4>
          <ul>
            <li className='muted'>Location-based search is currently not active, please check back later</li>
          </ul>
        <h4>City</h4>
          <ul>
            <li className='muted'>Location-based search is currently not active, please check back later</li>
          </ul>
      </div>
    </div>
  )
}

export default Search;
