import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import eventsReducer from './events';
import rsvpsReducer from './rsvps';
import tableReducer from './tables';
import venueReducer from './venues';

const rootReducer = combineReducers({
  session: sessionReducer,
  events: eventsReducer,
  rsvps: rsvpsReducer,
  tables: tableReducer,
  venues: venueReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
