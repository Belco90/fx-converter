import React from 'react';
import request from 'superagent';
import CheckFXRateSection from '../components/CheckFXRateSection';
import LatestFXRatesSection from '../components/LatestFXRatesSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestRates: {
        date: null,
        base: null,
        rates: null,
      },
      checkedRate: {
        date: null,
        sellCurrency: null,
        buyCurrency: null,
        amount: null,
      },
    };
  }

  componentDidMount() {
    request.get('http://api.fixer.io/latest')
      .end((err, res) => {
        if (err) {
          this.setState({
            latestRates: {
              date: null,
              base: null,
              rates: null,
            },
          });
        } else {
          this.setState({latestRates: res.body});
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-5">
            <LatestFXRatesSection
              base={this.state.latestRates.base}
              date={this.state.latestRates.date}
              latestRates={this.state.latestRates.rates}
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
          console.log(res.body);
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