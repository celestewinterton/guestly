import { csrfFetch } from "./csrf";

const SHOW = './rsvps/LOAD'
const CREATE = './rsvps/CREATE'
const UPDATE = './rsvps/UPDATE'
const CANCEL = './rsvps/CANCEL'

export const show = rsvps => ({
  type: SHOW,
  payload: rsvps
})

export const showRSVPs = () => async dispatch => {
  const response = await csrfFetch(`/api/rsvps`, {
    method: 'GET'
  })

  if (response.ok) {
    const rsvps = await response.json();
    dispatch(show(rsvps));
  }
}

const updateRSVPs = rsvp => ({
  type: CREATE,
  rsvp
})

export const createNewRSVP = (newRSVP) => async dispatch => {
  const response = await csrfFetch(`/api/rsvps`, {
    method: 'POST',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(newRSVP)
  })

  if (response.ok) {
    const rsvp = await response.json();
    dispatch(updateRSVPs(rsvp));
    return rsvp;
  }
}

export const editRSVP = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/rsvps/${payload.id}`, {
    method: 'PUT',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const rsvp = await response.json();
    dispatch(updateRSVPs(rsvp));
    return rsvp;
  }
}

const cancelRSVP = id => ({
  type: CANCEL,
  id
})

export const cancelCurrentRSVP = (id) => async dispatch => {
  const response = await csrfFetch(`/api/rsvps/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    dispatch(cancelRSVP(id));
  }
}

const initialState = {};

const rsvpsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SHOW:
      const rsvps = {}
      for (let rsvp of action.payload) {
        rsvps[rsvp.id] = rsvp;
      }
      return {...state, ...rsvps}
    case CREATE:
      newState = {
        ...state,
        [action.rsvp.id]: action.rsvp,
      };
      return newState;
    case UPDATE:
      newState = {
        ...state,
        [action.rsvp.id]: action.rsvp,
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

export default rsvpsReducer;
