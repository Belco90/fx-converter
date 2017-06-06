import React from 'react';
import MainSection from '../components/MainSection';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rates: {
        'GBP': 1.23,
        'EUR': 3.21
      }
    };
  }

  render() {
    return (
    <div>
      <MainSection
        latestRates={this.state.rates}
      />
    </div>
    )
  }
}

export default App