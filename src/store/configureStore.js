import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/allReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore() {
    const middlewares = [];
    middlewares.push(logger);
    middlewares.push(thunk);
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
}
