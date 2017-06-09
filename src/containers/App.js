import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import request from 'superagent';
import * as FXRateActions from '../actions/fx-rate';
import CheckFXRateSection from '../components/CheckFXRateSection';
import LatestFXRatesSection from '../components/LatestFXRatesSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedRate: {
        date: null,
        sellCurrency: null,
        buyCurrency: null,
        amount: null,
      },
    };
  }

  render() {
    const { latestRates, actions } = this.props;
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-5">
            <LatestFXRatesSection
              base={latestRates.base}
              date={latestRates.date}
              latestRates={latestRates.rates}
              getLatestRates={actions.getLatestRates}
            />
          </div>

          <div className="col-xs-12 col-md-7">
            <CheckFXRateSection fetchFXRateCb={this.fetchFXRate.bind(this)} checkedRate={this.state.checkedRate} />
          </div>

        </div>
      </div>
    );
  }

  fetchFXRate(date, sellCurrency, buyCurrency) {

    let url = 'http://api.fixer.io/' + date + '?base=' + sellCurrency + '&symbols=' + buyCurrency;

    request.get(url)
      .end((err, res) => {
        if (err) {
          this.setState({
            checkedRate: {
              date: null,
              sellCurrency: null,
              buyCurrency: null,
              amount: null,
            }
          });
        } else {
          this.setState({
            checkedRate: {
              date: res.body.date,
              sellCurrency: sellCurrency,
              buyCurrency: buyCurrency,
              amount: res.body.rates[buyCurrency],
            }
          });
        }
      });
  }
}

App.PropTypes = {
  latestRates: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    latestRates: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FXRateActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);