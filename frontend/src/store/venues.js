import { csrfFetch } from "./csrf";

const SHOW = './venues/LOAD'
const CREATE = './venues/CREATE'
const UPDATE = './venues/UPDATE'
const CANCEL = './venues/CANCEL'

export const show = venues => ({
  type: SHOW,
  payload: venues
})

export const showVenues = () => async dispatch => {
  const response = await csrfFetch(`/api/venues`, {
    method: 'GET'
  })

  if (response.ok) {
    const venues = await response.json();
    dispatch(show(venues));
  }
}

const updateVenue = venue => ({
  type: CREATE,
  venue
})

export const createNewRSVP = (newVenue) => async dispatch => {
  const response = await csrfFetch(`/api/venues`, {
    method: 'POST',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(newVenue)
  })

  if (response.ok) {
    const venue = await response.json();
    dispatch(updateVenue(venue));
    return venue;
  }
}

export const editVenue = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/venues/${payload.venueId}`, {
    method: 'PUT',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const venue = await response.json();
    dispatch(updateVenue(venue));
    return venue;
  }
}

const deleteVenue = id => ({
  type: CANCEL,
  id
})

export const cancelCurrentRSVP = (id) => async dispatch => {
  const response = await csrfFetch(`/api/venues/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    dispatch(deleteVenue(id));
  }
}

const initialState = {};

const venueReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SHOW:
      const venues = {}
      for (let venue of action.payload) {
        venues[venue.id] = venue;
      }
      return {...state, ...venues}
    case CREATE:
      newState = {
        ...state,
        [action.venue.id]: action.venue,
      };
      return newState;
    case UPDATE:
      newState = {
        ...state,
        [action.venue.id]: action.venue,
      };
      return newState;
    case CANCEL:
      newState = {...state}
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default venueReducer;
