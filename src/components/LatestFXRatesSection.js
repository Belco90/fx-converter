import PropTypes from 'prop-types';
import React from 'react';
import RatesTable from './RatesTable';

class LatestFXRatesSection extends React.Component {
  render() {
    if (this.props.latestRates) {

      return (
        <div className="latest-fx-rates-section">

          <h1>Latest FX Rates <small>{this.props.date}</small></h1>
          <h3>Base currency: <span className="label label-primary">{this.props.base}</span></h3>

          <div>
            <RatesTable rates={this.props.latestRates}/>
          </div>

        </div>
      );
    }

    // default when something went wrong getting data
    return (
      <div>
        <h1>Latest FX Rates</h1>
        <p>Sorry, something went wrong</p>
      </div>
    );
  }
}

LatestFXRatesSection.PropTypes = {
  latestRates: PropTypes.object.isRequired,
};

export default LatestFXRatesSection;