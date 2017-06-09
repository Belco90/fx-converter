import PropTypes from 'prop-types';
import React from 'react';
import RateRow from './RateRow';

class RatesTable extends React.Component {
  render() {

    return (
      <table className="table table-bordered table-hover">
        <tbody>
          {this.renderRates()}
        </tbody>
      </table>
    )
  }

  renderRates() {
    return Object.entries(this.props.rates).map((rate) => {return this.renderSingleRate(...rate)});
  }

  renderSingleRate(currency, amount) {
    return (
      <RateRow
        key={currency} // currency is unique so we can use it as component key
        currency={currency}
        amount={amount}
      />
    )
  }
}

RatesTable.PropTypes = {
  rates: PropTypes.object.isRequired
};

export default RatesTable;