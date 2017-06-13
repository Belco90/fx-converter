import PropTypes from 'prop-types';
import React from 'react';
import RatesTable from './RatesTable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FXRateActions from '../actions/fx-rate';

class LatestFXRatesSection extends React.Component {
  componentDidMount () {
    const {actions} = this.props;
    actions.getLatestRates();
  }

  render () {
    const {rates, date, base} = this.props;

    if (rates) {

      return (
        <div className="latest-fx-rates-section">

          <h1>Latest FX Rates <small>{date}</small></h1>
          <h3>Base currency: <span className="label label-primary">{base}</span></h3>

          <div>
            <RatesTable rates={rates} />
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
  actions: PropTypes.shape({
    getLatestRates: PropTypes.func.isRequired,
  }),
};

function mapStateToProps(state) {

  return {
    rates: state.rates,
    base: state.base,
    date: state.date,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FXRateActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestFXRatesSection);