import * as ActionType from '../actions/fx-rate';

function fxRateReducer(state = [], action) {
  switch (action.type) {

    case ActionType.LOAD_LATEST_RATES_SUCCESS:
      return Object.assign({}, state, {
        latestRates: [
          ...state.latestRates,
          {
            rates: action.data.rates,
            base: action.data.base,
            date: action.data.date,
            err: false,
          }
        ]
      });

    case ActionType.LOAD_LATEST_RATES_FAILED:
      return Object.assign({}, state, {
        latestRates: [
          ...state.latestRates,
          {
            rates: {},
            base: null,
            date: null,
            err: true,
          }
        ]
      });

    default:
      return state;
  }
}

export default fxRateReducer;