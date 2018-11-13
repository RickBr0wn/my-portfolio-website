import React from 'react'
import Particles from 'react-particles-js'
import { params } from './HomePageComponents/ParticlesParams'

const Home = () => 
      <div className="hero-image">
        <Particles params={params} />
        <div className="hero-text">
          <h1>Rick Brown</h1>
          <h3>Web Developer</h3>
          <div className="hero-social-icons">
            <i class="fab fa-github"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
  
export default Home