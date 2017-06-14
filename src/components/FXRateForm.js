import PropTypes from 'prop-types'
import React from 'react'
import CurrencySelect from './CurrencySelect'

class FXRateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      base: 'EUR',
      symbols: 'GBP',
      date: null,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    return (
      <form action="." method="GET" onSubmit={e => { this.onSubmitForm(e, this.props.fetchFXRateCb) }}>

        <div className="form-group">
          <label htmlFor="base-select">Sell Currency</label>
          <CurrencySelect name="base" defaultValue={this.state.base} onChangeCb={this.handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="symbols-select">Buy Currency</label>
          <CurrencySelect name="symbols" defaultValue={this.state.symbols} onChangeCb={this.handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="date-input">Date</label>
          <input
            type="date"
            name="date"
            min="1999-01-02"
            className="form-control"
            onChange={this.handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Check</button>
      </form>
    )
  }

  /**
   * Save input value in state when it changes.
   * @param {Event} e - Event triggered
   */
  handleInputChange(e) {
    const target = e.target

    this.setState({
      [target.name]: target.value,
    })
  }

  /**
   * Gets form data stored in state and passes it to proper callback.
   * @param {Event} e - Event triggered
   * @param {Function} cb - Callback to be executed
   */
  onSubmitForm(e, cb) {
    e.preventDefault()
    const {base, symbols, date} = this.state

    cb(date, base, symbols)
  }
}

FXRateForm.PropTypes = {
  fetchFXRateCb: PropTypes.func.isRequired,
}

export default FXRateForm