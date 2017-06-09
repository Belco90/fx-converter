import React from 'react';

class RateResult extends React.Component {

  render() {
    if (this.props.rate.amount) {
      return (
        <h3>{this.props.rate.sellCurrency} => {this.props.rate.buyCurrency}: {this.props.rate.amount}</h3>
      )
    }

    return null;
  }
}

export default RateResult;