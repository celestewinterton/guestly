import { csrfFetch } from "./csrf";

export const SHOW = './events/LOAD'
export const CREATE = './events/CREATE'
export const UPDATE = './events/UPDATE'
export const CANCEL = './events/CANCEL'

export const show = events => ({
  type: SHOW,
  payload: events
})

export const showAllEvents = () => async dispatch => {
  const response = await csrfFetch(`/api/events`, {
    method: 'GET'
  })
  if (response.ok) {
    const events = await response.json();
    dispatch(show(events));
  }
}

const createEvent = event => ({
  type: CREATE,
  event
})

export const createNewEvent = (newEvent) => async dispatch => {
  const response = await csrfFetch(`/api/events`, {
    method: 'POST',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(newEvent)
  })

  if (response.ok) {
    const event = await response.json();
    dispatch(createEvent(event));
    return event;
  }
}

const updateEvent = eventId => ({
  type: UPDATE,
  eventId
})

export const editEvent = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/events/${payload.id}`, {
    method: 'PUT',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const event = await response.json();
    dispatch(updateEvent(event));
    return event;
  }
}

const cancelEvent = eventId => ({
  type: CANCEL,
  eventId
})

export const cancelCurrentEvent = (id) => async dispatch => {
  const response = await csrfFetch(`/api/events/${id}`, {
    method: 'DELETE',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(id)
  })

  if (response.ok) {
    const event = await response.json();
    dispatch(cancelEvent(event));
    return event;
  }
}

const sortList = (list) => {
  return list.sort((eventA, eventB) => {
    return eventA.date - eventB.date;
  }).map((event) => event.id);
};

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SHOW:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case CREATE:
      newState = {
        ...state,
        [action.payload]: action.payload,
      };
      return newState;
    case UPDATE:
      newState = {
        ...state,
        [action.payload]: action.payload,
      };
      return newState;
    case CANCEL:
      return state.filter(({id}) => id !== action.payload)
    default:
      return state;
  }
};

export default eventsReducer;
