import * as ActionType from '../actions/fx-rate';

function latestRatesReducer(state = [], action) {
  switch (action.type) {
    case ActionType.LOAD_LATEST_RATES_SUCCESS:
      return action.response;
      break;

    default:
      return state;
  }
}

export default latestRatesReducer;