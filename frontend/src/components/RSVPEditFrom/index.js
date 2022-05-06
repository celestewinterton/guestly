import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as rsvpActions from '../../store/rsvps';
import { useLocation } from 'react-router-dom';

const diets = ['', 'Vegetarian', 'Vegan', 'Gluten-free', 'Allergy (please specify in notes below)']

function RSVPEditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvps);
  const rsvpId = parseInt(useLocation().pathname.split('/')[2]);
  const rsvp = Object.values(rsvps)?.find(rsvp => rsvpId === rsvp.id);
  const eventId = rsvp?.eventId
  const [plusOne, setPlusOne] = useState(rsvp?.plusOne);
  const [selfDietary, setSelfDietary] = useState(rsvp?.selfDietary);
  const [plusOneDietary, setPlusOneDietary] = useState(rsvp?.plusOneDietary);
  const [notes, setNotes] = useState(rsvp?.notes);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    // if (name.length < 3) errors.push('Please enter your Name');
    setErrors(errors);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const payload = {plusOne, plusOneDietary, selfDietary, notes, eventId, rsvpId};
    await dispatch(rsvpActions.editRSVP(payload));

    history.push(`/rsvps/${rsvpId}`)
    // setName('');
    setErrors([]);
    setHasSubmitted(false);
  };

  return (
    <div className="center">
      <div className="create-event-form-container">
        <form onSubmit={handleSubmit}>
          <h3>Please fill in details:</h3>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx} className="error">{error}</li>
            ))}
          </ul>
          <label> Do you have dietary restrictions?
            <select
              className='input'
              value={selfDietary}
              onChange={(e) => setSelfDietary(e.target.value)}
            >{diets.map(diet => (
              <option key={diet} value ={diet}>{diet}</option>
            ))}</select>
          </label>
          <label> Bringing a guest? Please provide their full name
            <input
              type="text"
              value={plusOne}
              placeholder="Plus One Full Name"
              onChange={(e) => setPlusOne(e.target.value)}
            />
          </label>
          <label> Your plus one's dietary restriction
            <select
              className='input'
              value={plusOneDietary}
              onChange={(e) => setPlusOneDietary(e.target.value)}
            >{diets.map(diet => (
              <option key={diet} value ={diet}>{diet}</option>
            ))}</select>
          </label>
          <label> Notes
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
          <button type="submit">Update RSVP</button>
        </form>
      </div>
    </div>
  )
}

export default RSVPEditForm;
