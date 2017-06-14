import {CALL_API} from '../middleware/api';

export const GETTING_LATEST_RATES = 'GETTING_LATEST_RATES';
export const LOAD_LATEST_RATES_SUCCESS = 'LOAD_LATEST_RATES_SUCCESS';
export const LOAD_LATEST_RATES_FAILED = 'LOAD_LATEST_RATES_FAILED';

export const GETTING_FX_RATE = 'GETTING_FX_RATE';
export const LOAD_FX_RATE_SUCCESS = 'LOAD_FX_RATE_SUCCESS';
export const LOAD_FX_RATE_FAILED = 'LOAD_FX_RATE_FAILED';

export function getLatestRates() {
  return {
    [CALL_API]: {
      method: 'get',
      url: 'http://api.fixer.io/latest',
      sendingType: GETTING_LATEST_RATES,
      successType: LOAD_LATEST_RATES_SUCCESS,
      failureType: LOAD_LATEST_RATES_FAILED,
    },
  };
}

export function getFXRate(date, sellCurrency, buyCurrency) {

  return {
    [CALL_API]: {
      method: 'get',
      url: `http://api.fixer.io/${date}?base=${sellCurrency}&symbols=${buyCurrency}`,
      sendingType: GETTING_FX_RATE,
      successType: LOAD_FX_RATE_SUCCESS,
      failureType: LOAD_FX_RATE_FAILED,
    },
  };
}