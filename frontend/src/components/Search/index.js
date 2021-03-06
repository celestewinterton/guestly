import { useSelector } from 'react-redux';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Search = ({query, setQuery, setSearchResults}) => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events)
  // const eventResults = Object.values(events)?.filter(
  //   event => event?.name?.toLowerCase().includes(query?.toLowerCase())
  // );

  const eventResults = Object.values(events)?.filter(
    event => event?.name?.toLowerCase().includes(query?.toLowerCase())
  );
  const venueResults = Object.values(events)?.filter(
    event => event?.Venue?.name?.toLowerCase().includes(query?.toLowerCase())
  );
  const cityResults = Object.values(events)?.filter(
    event => event?.Venue?.city?.toLowerCase().includes(query?.toLowerCase())
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
  }, [dispatch])

  return (
    <div className='card'>
      <div className='search-results'
      onClick={e=>e.stopPropagation()}>
        <h4>All Events</h4>
          <ul>{eventResults.length ? eventResults.map(event =>
            <li key={`event-${event.id}`}>
              <div className='search-results-li'>
                <img className='search-results-image' src={event?.image ? event.image : null} alt=''></img>
                <NavLink className='unset link search-result-text' to={`/events/${event.id}`} onClick={e => {
                  setSearchResults(false)
                  setQuery('')
                  }}>
                  {event?.Venue?.city ? formatResult(`${event?.name}, ${event?.Venue?.city} ${event?.Venue?.state}`) : formatResult(`${event?.name}, ${event?.Venue?.name}`)}
                </NavLink>
              </div>
            </li>)
          : <div className='muted'>No results were found</div> }</ul>
        <h4>Events by Venue</h4>
        <ul>{venueResults.length ? venueResults.map(event =>
            <li key={`event-${event.id}`}>
              <div className='search-results-li'>
                <NavLink className='unset link search-result-text' to={`/events/${event.id}`} onClick={e => {
                  setSearchResults(false)
                  setQuery('')
                  }}>
                  {formatResult(`${event?.name}, ${event.Venue?.name}`)}
                </NavLink>
              </div>
            </li>)
          : <div className='muted'>No results were found</div> }</ul>
        <h4>Events by City</h4>
        <ul>{cityResults.length ? cityResults.map(event =>
            <li key={`event-${event.id}`}>
              <div className='search-results-li'>
                <NavLink className='unset link search-result-text' to={`/events/${event.id}`} onClick={e => {
                  setSearchResults(false)
                  setQuery('')
                  }}>
                  {formatResult(`${event?.name}, ${event?.Venue?.city}`)}
                </NavLink>
              </div>
            </li>)
          : <div className='muted'>No results were found</div> }</ul>
      </div>
    </div>
  )
}

export default Search;
