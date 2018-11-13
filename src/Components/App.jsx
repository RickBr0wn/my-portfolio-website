import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import * as routes from '../Constants/routes'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={Home} />
          <Route path={routes.ABOUT_PAGE} component={About} />
          <Route path={routes.PROJECTS_PAGE} component={Projects} />
          <Route path={routes.CONTACT_PAGE} component={Contact} />
          <Route path={routes.RESUME_PAGE} component={Resume} />
        </Switch>
      </div>
    )
  }
}

export default App