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
  }
}

const updateEvent = eventId => ({
  type: UPDATE,
  eventId
})

const cancelEvent = eventId => ({
  type: CANCEL,
  eventId
})

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
      // newState = Object.assign({}, state);
      // newState = action.payload;
      // newState.push(action.payload)
      newState = {
        ...state,
        [action.payload]: action.payload,
      };
      return newState;

      // if (!state[action.event.id]) {
      //   const newState = {
      //     ...state,
      //     [action.event.id]: action.event
      //   };
      //   const eventsList = newState.list.map(id => newState[id]);
      //   eventsList.push(action.event);
      //   newState.list = sortList(eventsList);
      //   return newState;
      // }
      return {
        ...state,
        [action.event.id]: {
          ...state[action.event.id],
          ...action.event
        }
      };
      // case UPDATE:
      //   return state
      // case REMOVE:
      //   return state.filter(({id}) => id !== action.payload)
    default:
      return state;
  }
};

export default eventsReducer;
