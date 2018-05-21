import React, { Component } from 'react'

// Libraries
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

// Compnents
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './Components/Main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
        <Layout fixedHeader>
            <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>Rick</span><strong>Brown</strong></span>}>
                <Navigation>
                    <Link to="/aboutme"><strong>About Me</strong></Link>
                    <Link to="/projects"><strong>Projects</strong></Link>
                    <Link to="/resume"><strong>Resume</strong></Link>
                    <Link to="/contact"><strong>Contact Me</strong></Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/aboutme"><strong>About Me</strong></Link>
                    <Link to="/projects"><strong>Projects</strong></Link>
                    <Link to="/resume"><strong>Resume</strong></Link>
                    <Link to="/contact"><strong>Contact Me</strong></Link>
                </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
    )
  }
}

export default App
