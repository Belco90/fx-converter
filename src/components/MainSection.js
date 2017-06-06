import React from 'react';
import Rate from './Rate';
import PropTypes from 'prop-types';

class MainSection extends React.Component {
  render() {
    if (this.props.latestRates) {
      const rates = Object.entries(this.props.latestRates).map((rate, idx) => {return this.renderRate(rate, idx)});

      return (
        <div>
          <h1>Latest FX Rates ({this.props.date})</h1>
          <h3>Base currency: {this.props.base}</h3>
          <ul>{rates}</ul>
        </div>
      )
    }

    // default when something went wrong calling API
    return (
      <div>
        <h1>Latest FX Rates</h1>
        <p>Sorry, something went wrong</p>
      </div>
    )
  }

  renderRate(rate, idx) {
    return (
      <Rate
        key={idx}
        currency={rate[0]}
        amount={rate[1]}
      />
    )
  }
}

MainSection.PropTypes = {
  latestRates: PropTypes.object.isRequired
};

export default MainSection