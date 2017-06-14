import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as FXRateActions from '../actions/fx-rate'
import FXRateForm from './FXRateForm'
import RateResult from './RateResult'

class CheckFXRateSection extends React.Component {

  render() {
    const {buyCurrency, sellCurrency, rate, err, actions} = this.props

    return (
      <div className="currency-pair-fx-rate-section">
        <h1>Check FX Rate</h1>

        <div className="row">
          <div className="col-md-6">
            <FXRateForm fetchFXRateCb={actions.getFXRate}/>
          </div>

          <div className="col-md-6">
            <RateResult
              buyCurrency={buyCurrency}
              sellCurrency={sellCurrency}
              rate={rate}
              err={err}
            />
          </div>
        </div>
      </div>
    )
  }

}

CheckFXRateSection.PropTypes = {
  actions: PropTypes.shape({
    getFXRate: PropTypes.func.isRequired,
  }),
}

function mapStateToProps(state) {
  return state.checkedRates[state.checkedRates.length - 1];
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FXRateActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckFXRateSection)