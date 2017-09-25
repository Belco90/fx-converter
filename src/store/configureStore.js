import {createStore, applyMiddleware, compose} from 'redux';
import apiMiddleware from '../middleware/api';
import FXReducer from '../reducers/fx-rate';

const middlewares = [
  apiMiddleware,
];

export default function configureStore(initialState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(FXReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));
}