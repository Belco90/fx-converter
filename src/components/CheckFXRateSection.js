import React from 'react';

class CheckFXRateSection extends React.Component {
  render() {
    return (
      <div className="currency-pair-fx-rate-section">
        <h1>Check FX Rate</h1>

        <div>
          <form action="." method="GET" className="form-inline">

            <div className="form-group">
              <label htmlFor="buy-currency-select">Buy Currency</label>
              <select name="buy-currency" id="buy-currency-select" className="form-control">
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sell-currency-select">Sell Currency</label>
              <select name="sell-currency" id="sell-currency-select" className="form-control">
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date-input">Date</label>
              <input type="date" className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Check</button>
          </form>

          <span>TODO: show here result</span>

          <h2>TODO: show here historic rates checked</h2>
        </div>
      </div>
    );
  }
}

export default CheckFXRateSection;