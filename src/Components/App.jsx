import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import * as routes from '../Constants/routes'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'
import CardComponent from './CardComponent/CardComponent'

const App = () => {
  console.log('app')
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Route path="/(.+)"
        render={() => (
          <div>
            <Navbar />
              <Switch>
                <Route path={routes.ABOUT_PAGE} component={About} />
                <Route path={routes.PROJECTS_PAGE} component={Projects} />
                <Route path={routes.CONTACT_PAGE} component={Contact} />
                <Route path={routes.RESUME_PAGE} component={Resume} />    
                <Route path={routes.CARD_COMPONENT} component={CardComponent} />    
              </Switch>
          </div>
        )} />
    </div>
  )
}


export default App