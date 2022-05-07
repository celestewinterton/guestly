import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import * as eventActions from '../../store/events';
import url from '../MainContent/images/proposal.jpeg';
import { useHistory } from 'react-router';
import Calendar from 'react-calendar';

function EventEditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const {eventId} = useParams();
  const events = useSelector(state => state.events)
  const event = Object.values(events)?.find(event => event.id === parseInt(eventId))
  let myEvent = event?.userId === sessionUser?.id

  const [name, setName] = useState(event?.name);
  const [date, setDate] = useState((`${event?.date}`).slice(0, 10));
  const [details, setDetails] = useState(event?.details);
  const [dresscode, setDresscode] = useState(event?.dresscode);
  const [image, setImage] = useState(event?.image);
  const [venue, setVenue] = useState("");
  const [venueStreet, setVenueStreet] = useState("");
  const [venueCity, setVenueCity] = useState("");
  const [venueState, setVenueState] = useState("");
  const [venueZip, setVenueZip] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
    const errors = [];
    if (!name.length) errors.push('Please enter your Name');
    setErrors(errors);
  }, [dispatch, name])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setHasSubmitted(true);

    const payload = {...event, name, date, details, dresscode, image}
    await dispatch(eventActions.editEvent(payload));

    history.push("/events")
    setName('');
    setErrors([]);
    setHasSubmitted(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(eventActions.cancelCurrentEvent(eventId));
    history.push("/events")
  }

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div className="center">
      <div className="create-event-form-container">
        <form onSubmit={handleSubmit}>
          <h3>Update your event</h3>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx} className="error">{error}</li>
            ))}
          </ul>
          <label>
            Event Title
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Details
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </label>
          <label>
            Dresscode
            <input
              type="text"
              value={dresscode}
              onChange={(e) => setDresscode(e.target.value)}
              placeholder={dresscode ? dresscode : "Example: Black-Tie Attire or Semi-Formal"}
            />
          </label>
          <label>
            Cover Photo
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <button type="submit">Save</button>
        </form>
          {/* <button className="link unset right-bottom" onClick={handleDelete}>Cancel Event</button> */}
      </div>
    </div>
  )
}

export default EventEditForm;
