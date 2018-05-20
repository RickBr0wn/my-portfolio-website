import React, { Component } from 'react'

// Libraries
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

// Compnents
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Content />
        </Layout>
    </div>
    )
  }
}

export default App
