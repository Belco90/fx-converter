import {CALL_API} from '../middleware/api';

export const GETTING_QUESTIONS = 'GETTING_QUESTIONS';
export const LOAD_LATEST_RATES_SUCCESS = 'LOAD_LATEST_RATES_SUCCESS';
export const LOAD_LATEST_RATES_FAILED = 'LOAD_LATEST_RATES_FAILED';

export function getLatestRates() {
  return {
    [CALL_API]: {
      method: 'get',
      url: 'http://api.fixer.io/latest',
      sendingType: GETTING_QUESTIONS,
      successType: LOAD_LATEST_RATES_SUCCESS,
      failureType: LOAD_LATEST_RATES_FAILED,
    },
  };
}