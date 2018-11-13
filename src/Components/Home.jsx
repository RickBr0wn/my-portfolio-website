import React from 'react'
import Particles from 'react-particles-js'
import { params } from './HomePageComponents/ParticlesParams'

const Home = () => 
      <div className="hero-image">
        <Particles params={params} />
        <div className="hero-text">
          <h1>Rick Brown</h1>
          <h3>Web Developer</h3>
           
        </div>
      </div>
  
export default Home