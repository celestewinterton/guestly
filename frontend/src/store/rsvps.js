import { SHOW, CREATE, UPDATE, REMOVE } from "./events";
import { csrfFetch } from "./csrf";

export const show = rsvps => ({
  type: SHOW,
  payload: rsvps
})

export const showRSVPs = () => async dispatch => {
  const response = await csrfFetch(`/api/rsvps`, {
    method: 'GET'
  })
  console.log("******** =>", response)
  if (response.ok) {
    const rsvps = await response.json();
    dispatch(show(rsvps));
  }
}

const initialState = {};

const rsvpsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SHOW:
      newState = Object.assign({}, state);
      newState = action.payload;
      console.log("NEWSTATE", newState)
      return newState;
    default:
      return state;
  }
};

export default rsvpsReducer;
