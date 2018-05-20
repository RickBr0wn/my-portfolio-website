import React from 'react'

// Components
import LandingPage from './LandingPage'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
	<Switch>
		<Route exact path="/" component={LandingPage} />
	</Switch>
}

export default Main