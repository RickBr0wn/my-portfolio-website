import React, { Component } from 'react'

// Components
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl'

class Projects extends Component{
	constructor(props){
		super(props)
		this.state = { activeTab: 0	}
	}

	toggleCatagories(){
		if(this.state.activeTab === 0){
			return(
				<div>
					<h1>This is JavaScript</h1>
				</div>
			)
		}else if(this.state.activeTab === 1){
			return(
				<div className="grid-container">
				<div className="projects-grid">
					<Grid>
						<Cell col={3}>
							<Card shadow={5} style={{ minWidth: "450", margin: "auto" }} >
								<CardTitle style={{ color: "#fff", fontWeight: "900", height: "220px", background: "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"}}>
									Personal Portfolio Website
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								</CardText>
								<CardActions border>
									<Button colored>GitHub</Button>
									<Button colored>CodePen</Button>
									<Button colored>Live Demo</Button>
								</CardActions>
								<CardMenu style={{ color: "#fff" }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={3}>
							<Card shadow={5} style={{ minWidth: "450", margin: "auto" }} >
								<CardTitle style={{ color: "#fff", height: "220px", background: "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"}}>
									React Project 2
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								</CardText>
								<CardActions border>
									<Button colored>GitHub</Button>
									<Button colored>CodePen</Button>
									<Button colored>Live Demo</Button>
								</CardActions>
								<CardMenu style={{ color: "#fff" }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={3}>
							<Card shadow={5} style={{ minWidth: "450", margin: "auto" }} >
								<CardTitle style={{ color: "#fff", height: "220px", background: "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"}}>
									React Project 3
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								</CardText>
								<CardActions border>
									<Button colored>GitHub</Button>
									<Button colored>CodePen</Button>
									<Button colored>Live Demo</Button>
								</CardActions>
								<CardMenu style={{ color: "#fff" }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={3}>
							<Card shadow={5} style={{ minWidth: "450", margin: "auto" }} >
								<CardTitle style={{ color: "#fff", height: "220px", background: "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"}}>
									React Project 3
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								</CardText>
								<CardActions border>
									<Button colored>GitHub</Button>
									<Button colored>CodePen</Button>
									<Button colored>Live Demo</Button>
								</CardActions>
								<CardMenu style={{ color: "#fff" }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Cell>
					</Grid>
			</div>
			</div>
			)
		}else if(this.state.activeTab === 2){
			return(
				<div>
					<h1>This is NodeJS</h1>
				</div>
			)
		}
		else if(this.state.activeTab === 3){
			return(
				<div>
					<h1>This is p5.js</h1>
				</div>
			)
		}else if(this.state.activeTab === 4){
			return(
				<div>
					<h1>This is Mongo DB</h1>
				</div>
			)
		}
	}

	render(){
		return(
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
					<Tab>JavaScript</Tab>
					<Tab>ReactJS</Tab>
					<Tab>NodeJS</Tab>
					<Tab>p5.js</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCatagories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects