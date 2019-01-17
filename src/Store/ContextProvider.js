import React, {Component } from 'react'
import Context from './Context'

class ContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      particleParams: {
        particles: {
          number: {
              value: 150
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#fff",
              blur: 2
            }
          }
        }
      }
    }
  }
  
  calculateNumberOfParticles = () => {
    let newParams = Object.assign({}, this.state.particleParams)
    newParams.particles.number.value = window.innerWidth * 0.1
    this.setState({ newParams })
  }

  componentWillMount() {
    this.calculateNumberOfParticles()
  }

  render() {
    return (
      <Context.Provider value={{
        particleParams: this.state.particleParams
      }}>
      {this.props.children}     
      </Context.Provider>
    )
  }
}

export default ContextProvider