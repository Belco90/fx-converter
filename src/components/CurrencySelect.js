import PropTypes from 'prop-types'
import React from 'react'
import CurrencyOption from './CurrencyOption'


const CURRENCIES = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR',
  'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY',
  'USD', 'ZAR']

class CurrencySelect extends React.Component {
  render() {
    const options = CURRENCIES.map(symbol => {
      return <CurrencyOption key={symbol} symbol={symbol}/>
    })

    return (
      <select
        name={this.props.name}
        className="form-control"
        defaultValue={this.props.defaultValue}
        onChange={e => { this.props.onChangeCb(e) }}>
      {options}
      </select>
    )
  }
}

CurrencySelect.PropTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onChangeCb: PropTypes.func.isRequired,
}


export default CurrencySelect