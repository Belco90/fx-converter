import PropTypes from 'prop-types'
import React from 'react'
import RateResult from './RateResult'
import FXRateForm from './FXRateForm'

class CheckFXRateSection extends React.Component {
  render () {
    return (
      <div className="currency-pair-fx-rate-section">
        <h1>Check FX Rate</h1>

        <div className="row">
          <div className="col-md-6">
            <FXRateForm fetchFXRateCb={this.props.fetchFXRateCb}/>
          </div>

          <div className="col-md-6">
            <RateResult rate={this.props.checkedRate}/>
          </div>
        </div>
      </div>
    )
  }

}

CheckFXRateSection.PropTypes = {
  fetchFXRateCb: PropTypes.func.isRequired,
  checkedRate: PropTypes.object.isRequired,
}

export default CheckFXRateSection