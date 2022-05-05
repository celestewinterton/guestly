import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as eventActions from '../../store/events';

const diets = ['None', 'Vegetarian', 'Vegan', 'Gluten-free', 'Allergy (please specify in notes below)']

function RSVPForm() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstName, setFirstName] = useState(sessionUser?.firstName);
  const [lastName, setLastName] = useState(sessionUser?.lastName);
  const [plusOne, setPlusOne] = useState('');
  const [selfDietary, setSelfDietary] = useState('None');
  const [plusOneDietary, setPlusOneDietary] = useState('');
  const [message, setMessage] = useState('');
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

    const payload = {}
    await dispatch(eventActions.createNewEvent(payload));

    history.push("/events")
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
          <label> First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label> Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default RSVPForm;
