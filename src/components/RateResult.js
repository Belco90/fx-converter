import React from 'react';

class RateResult extends React.Component {

  render() {
    if (!this.props.err) {
      return (
        <h3>{this.props.sellCurrency} => {this.props.buyCurrency}: {this.props.rate}</h3>
      )
    }

    return null;
  }
}

export default RateResult;