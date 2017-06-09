import PropTypes from 'prop-types';
import React from 'react';
import CurrencyOption from './CurrencyOption';


const CURRENCIES = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR',
  'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY',
  'USD', 'ZAR'];

class CurrencySelect extends React.Component {
  render() {
    const options = CURRENCIES.map(symbol => {
      return <CurrencyOption key={symbol} symbol={symbol} />;
    });
    let elId = this.props.name + '-select';

    return (
      <select name={this.props.name} id={elId} className="form-control" defaultValue={this.props.defaultValue}>
        {options}
      </select>
    );
  }
}

CurrencySelect.PropTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};


export default CurrencySelect;