import { csrfFetch } from "./csrf";

const SHOW = './tables/LOAD'
const CREATE = './tables/CREATE'
const UPDATE = './tables/UPDATE'
const CANCEL = './tables/CANCEL'

export const show = tables => ({
  type: SHOW,
  payload: tables
})

export const showTables = (tables, eventId) => async dispatch => {
  const id = 1
  const response = await csrfFetch(`/api/events/${eventId}/tables`, {
    method: 'GET'
  })

  if (response.ok) {
    const tables = await response.json();
    dispatch(show(tables));
  }
}

const update = table => ({
  type: CREATE,
  table
})

export const createTable = (newTable) => async dispatch => {
  const response = await csrfFetch(`/api/events/${newTable.eventId}/tables`, {
    method: 'POST',
    headers: {'ContentType': 'application/json'},
    body: JSON.stringify(newTable)
  })

  if (response.ok) {
    const table = await response.json();
    dispatch(update(table));
    return table;
  }
}

// export const editTable = (payload) => async dispatch => {
//   const response = await csrfFetch(`/api/rsvps/${payload.tableId}`, {
//     method: 'PUT',
//     headers: {'ContentType': 'application/json'},
//     body: JSON.stringify(payload)
//   })

//   if (response.ok) {
//     const table = await response.json();
//     dispatch(update(table));
//     return table;
//   }
// }

const cancelTable = id => ({
  type: CANCEL,
  id
})

export const deleteTable = (id) => async dispatch => {
  const response = await csrfFetch(`/api/rsvps/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    dispatch(cancelTable(id));
  }
}

const initialState = {};

const tableReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SHOW:
      const tables = {}
      for (let table of action.payload) {
        tables[table.id] = table;
      }
      return {...state, ...tables}
    case CREATE:
      newState = {
        ...state,
        [action.table.id]: action.table,
      };
      return newState;
    case UPDATE:
      newState = {
        ...state,
        [action.table.id]: action.table,
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

export default tableReducer;
