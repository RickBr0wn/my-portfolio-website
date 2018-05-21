import React, { Component }from 'react'

// Components
import { Tab, Tabs } from 'react-mdl'

class Projects extends Component{
	constructor(props){
		super(props)
		this.state = { activeTab: 0	}
	}

	render(){
		return(
			<div className="catagory-tabs">
				<Tabs activeTab={this.state.activeTab}
							onChange={tabID => this.setState({ activeTab: tabID })} 
							ripple >
					<Tab>React</Tab>
					<Tab>NodeJS</Tab>
					<Tab>JavaScript</Tab>	
				</Tabs>
			</div>
		)
	}
}

export default Projects