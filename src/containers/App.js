import React from 'react';
import MainSection from '../components/MainSection';
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      base: null,
      rates: null
    };
  }

  componentDidMount() {
    request.get('http://api.fixer.io/latest')
      .end((err, res) => {
        if (err) {
          this.setState({rates: null});
        } else {
          this.setState(res.body);
        }
      });
  }

  render() {
    return (
    <div>
      <MainSection
        base={this.state.base}
        date={this.state.date}
        latestRates={this.state.rates}
      />
    </div>
    )
  }
}

export default App