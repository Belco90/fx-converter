import React from 'react'
import request from 'superagent'
import CheckFXRateSection from '../components/CheckFXRateSection'
import LatestFXRatesSection from '../components/LatestFXRatesSection'

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
    // const { latestRates, actions } = this.props;
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-5">
            <LatestFXRatesSection />
          </div>

          <div className="col-xs-12 col-md-7">
            <CheckFXRateSection fetchFXRateCb={this.fetchFXRate.bind(this)} checkedRate={this.state.checkedRate} />
          </div>

        </div>
      </div>
    );
  }

  fetchFXRate(date, sellCurrency, buyCurrency) {

    let url = `http://api.fixer.io/${date}?base=${sellCurrency}&symbols=${buyCurrency}`;

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

export default App;