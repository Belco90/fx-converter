import superAgent from 'superagent'

export const CALL_API = Symbol('CALL_API')

export default store => next => action => {
  if (!action[CALL_API]) {
    return next(action)
  }
  let request = action[CALL_API]
  let {method, url, failureType, successType, sendingType} = request
  let {dispatch} = store

  dispatch({type: sendingType})
  superAgent[method](url)
    .end((err, res) => {
      if (err) {
        dispatch({
          type: failureType,
          response: err,
        })
      } else {
        dispatch({
          type: successType,
          data: res.body,
        })
      }
    })
};