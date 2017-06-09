import PropTypes from 'prop-types';
import React from 'react';

class CurrencyOption extends React.Component {
  render() {

    return (
      <option value={this.props.symbol}>{this.props.symbol}</option>
    );
  }
}

CurrencyOption.PropTypes = {
  symbol: PropTypes.string.isRequired,
};


export default CurrencyOption;