import PropTypes from 'prop-types';
import React from 'react';

class RateRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.currency}</td>
        <td>{this.props.amount}</td>
      </tr>
    )
  }
}

RateRow.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default RateRow;