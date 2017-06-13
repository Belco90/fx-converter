import {createStore, applyMiddleware} from 'redux';
import apiMiddleware from '../middleware/api';
import FXReducer from '../reducers/fx-rate';

let middlewares = [
  apiMiddleware,
];

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares
)(createStore);


export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(FXReducer, initialState);

  return store
}