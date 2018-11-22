import React from 'react'
import Particles from 'react-particles-js'
import { ABOUT_PAGE } from '../Constants/routes'
import Context from '../Store/Context'
import ContextProvider from '../Store/ContextProvider'

const Home = ({history}) => 
  <div className="hero-image">
    <div className="filter">
      <ContextProvider>
        <Context.Consumer>
          {context => (
            <Particles params={context.particleParams} height="100" />
          )}
        </Context.Consumer>
      </ContextProvider>
      <div className="hero-text">
        <h1>Rick Brown</h1>
        <h3>Web Developer</h3>
        <div className="hero-social-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <button onClick={() => history.push(ABOUT_PAGE)} className="btn-hero pulse">View My Work</button>
      </div>
    </div>
  </div>
  
export default Home