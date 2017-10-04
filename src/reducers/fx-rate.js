import * as ActionType from '../actions/fx-rate'

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
          },
        ],
      })

    case ActionType.LOAD_FX_RATE_SUCCESS:
      // we suppose we only have one buy currency now, maybe multiple in the future
      let buyCurrency = Object.keys(action.data.rates)[0]

      return Object.assign({}, state, {
        checkedRates: [
          ...state.checkedRates,
          {
            date: action.data.date,
            sellCurrency: action.data.base,
            buyCurrency: buyCurrency,
            rate: action.data.rates[buyCurrency],
            err: false,
          },
        ],
      })

    case ActionType.LOAD_LATEST_RATES_FAILED:
      return Object.assign({}, state, {
        latestRates: [
          ...state.latestRates,
          {
            rates: {},
            base: null,
            date: null,
            err: true,
          },
        ],
      })

    case ActionType.LOAD_FX_RATE_FAILED:
      return Object.assign({}, state, {
        checkedRates: [
          ...state.checkedRates,
          {
            date: null,
            sellCurrency: null,
            buyCurrency: null,
            rate: null,
            err: true,
          },
        ],
      })

    default:
      return state
  }
}

export default fxRateReducer