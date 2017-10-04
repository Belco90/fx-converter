import React from 'react'
import CheckFXRateSection from '../components/CheckFXRateSection'
import LatestFXRatesSection from '../components/LatestFXRatesSection'

class App extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-5">
            <LatestFXRatesSection />
          </div>

          <div className="col-xs-12 col-md-7">
            <CheckFXRateSection  />
          </div>

        </div>
      </div>
    )
  }
}

export default App