import React from 'react';
import LatestFXRatesSection from '../components/LatestFXRatesSection';
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      base: null,
      rates: null,
    };
  }

  componentDidMount() {
    request.get('http://api.fixer.io/latest')
      .end((err, res) => {
        if (err) {
          /*
          this.setState({
            date: null,
            base: null,
            rates: null,
          });
          */

          this.setState({
            date: '07/06/2017',
            base: 'EUR',
            rates: {
              'GBP': 1.2345,
              'USD': 2.452,
              'NOK': 0.78,
              'JPY': 12.348,
            }
          })
        } else {
          this.setState(res.body);
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-5">
            <LatestFXRatesSection
              base={this.state.base}
              date={this.state.date}
              latestRates={this.state.rates}
            />
          </div>

          <div className="col-xs-12 col-md-7">

          </div>

        </div>
      </div>
    );
  }
}

export default App;