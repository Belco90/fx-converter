import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore({
  latestRates: [{
    rates: {},
    base: null,
    date: null,
    err: true,
  }],
  checkedRates: [{
    date: null,
    sellCurrency: null,
    buyCurrency: null,
    amount: null,
    err: true,
  }]

})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)