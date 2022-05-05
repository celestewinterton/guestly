import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as eventActions from '../../store/events';

function EventForm() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [dresscode, setDresscode] = useState("");
  const [venue, setVenue] = useState("");
  const [venueStreet, setVenueStreet] = useState("");
  const [venueCity, setVenueCity] = useState("");
  const [venueState, setVenueState] = useState("");
  const [venueZip, setVenueZip] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push('Please enter your Name');
    setErrors(errors);
  }, [name])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors([]);
    setHasSubmitted(true);

    const payload = {name, date, details, dresscode}
    await dispatch(eventActions.createNewEvent(payload));

    history.push("/events")
    setName('');
    setErrors([]);
    setHasSubmitted(false);
  };

  return (
    <div className="center">
      <div className="create-event-form-container">
        <form onSubmit={handleSubmit}>
          <h3>Let's plan your event!</h3>
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
              placeholder="Example: Black-Tie Attire or Semi-Formal"
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default EventForm;
