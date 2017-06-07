import PropTypes from 'prop-types';
import React from 'react';
import RatesTable from './RatesTable';

class MainSection extends React.Component {
  render() {
    if (this.props.latestRates) {

      return (
        <div className="row">
          <div className="col-xs-12 col-md-6">

            <h1>Latest FX Rates <small>{this.props.date}</small></h1>
            <h3>Base currency: <span className="label label-info">{this.props.base}</span></h3>

            <div className="latest-fx-rates-table">
              <RatesTable rates={this.props.latestRates}/>
            </div>

          </div>
        </div>
      )
    }

    // default when something went getting data
    return (
      <div>
        <h1>Latest FX Rates</h1>
        <p>Sorry, something went wrong</p>
      </div>
    )
  }
}

MainSection.PropTypes = {
  latestRates: PropTypes.object.isRequired
};

export default MainSection;