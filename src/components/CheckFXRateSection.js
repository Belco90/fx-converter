import PropTypes from 'prop-types';
import React from 'react';
import CurrencySelect from './CurrencySelect';
import RateResult from './RateResult';

class CheckFXRateSection extends React.Component {
  render() {
    return (
      <div className="currency-pair-fx-rate-section">
        <h1>Check FX Rate</h1>

        <div className="row">
          <div className="col-md-6">
            <form action="." method="GET" onSubmit={(e) => {this.onSubmitForm(e, this.props.fetchFXRateCb)}}>

              <div className="form-group">
                <label htmlFor="base-select">Sell Currency</label>
                <CurrencySelect name="base" defaultValue="EUR" />
              </div>

              <div className="form-group">
                <label htmlFor="symbols-select">Buy Currency</label>
                <CurrencySelect name="symbols" defaultValue="GBP" />
              </div>

              <div className="form-group">
                <label htmlFor="date-input">Date</label>
                <input type="date" id="date-input" min="1999-01-02" className="form-control" required/>
              </div>

              <button type="submit" className="btn btn-primary">Check</button>
            </form>
          </div>

          <div className="col-md-6">
            <RateResult rate={this.props.checkedRate} />
          </div>
        </div>
      </div>
    );
  }

  onSubmitForm(e, cb) {
    e.preventDefault();
    let date = document.getElementById('date-input').value;
    let sellCurrency = document.getElementById('base-select').value;
    let buyCurrency = document.getElementById('symbols-select').value;

    cb(date, sellCurrency, buyCurrency);
  }
}

CheckFXRateSection.PropTypes = {
  fetchFXRateCb: PropTypes.func.isRequired,
  checkedRate: PropTypes.object.isRequired,
};

export default CheckFXRateSection;