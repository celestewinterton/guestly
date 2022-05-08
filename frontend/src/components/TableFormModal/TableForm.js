import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import * as tableActions from '../../store/tables';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Redirect } from 'react-router-dom';

const shapes = ['Round', 'Square', 'Rectangular', 'Head-Table', 'Other']

function TableForm() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const {eventId} = useParams();
  const [guestsPerTable, setGuestsPerTable] = useState('');
  const [tableShape, setTableShape] = useState('None');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    // if (name.length < 3) errors.push('Please enter your Name');
    setErrors(errors);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {guestsPerTable, tableShape, eventId};
    await dispatch(tableActions.createTable(payload));

    history.push(`/events/${eventId}`)
    setErrors([]);
  };

  if (!sessionUser) return <Redirect to="/" />;

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
          <label> Table Capacity
            <input
              type="number"
              value={guestsPerTable}
              onChange={(e) => setGuestsPerTable(e.target.value)}
            />
          </label>
          <label> Table Shape
            <select
              className='input'
              value={tableShape}
              onChange={(e) => setTableShape(e.target.value)}
            >{shapes.map(shape => (
              <option key={shape} value ={shape}>{shape}</option>
            ))}</select>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default TableForm;
