import React from 'react';
import PropTypes from 'prop-types';

class Rate extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.currency}: </span>
        <strong>{this.props.amount}</strong>
      </li>
    )
  }
}

Rate.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default Rate