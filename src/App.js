import React, { Component } from 'react'

// Components
import ButtonAppBar from './Components/ButtonAppBar'
import LandingPage from './Pages/LandingPage'

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
				<LandingPage />
    	</div>
    )
  }
}

export default App
