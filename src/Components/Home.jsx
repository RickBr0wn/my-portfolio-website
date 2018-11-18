import React from 'react'
import Particles from 'react-particles-js'
import { params } from './HomePageComponents/ParticlesParams'
import { ABOUT_PAGE } from '../Constants/routes'

const Home = ({history}) => 
  <div className="hero-image">
    <div className="filter">
      <Particles params={params} height="100" />
      <div className="hero-text">
        <h1>Rick Brown</h1>
        <h3>Web Developer</h3>
        <div className="hero-social-icons">
          <i class="fab fa-github"></i>
          <i class="fab fa-twitter"></i>
        </div>
        <button onClick={() => history.push(ABOUT_PAGE)} className="btn-hero pulse">View My Work</button>
      </div>
    </div>
  </div>
  
export default Home