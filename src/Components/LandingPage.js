import React, { Component }from 'react'

//Components
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component{
	render(){
		return(
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="landing-grid">
					<Cell col={12}>
					 <img 
						 src="https://avatars2.githubusercontent.com/u/21251695?s=400&u=6739981fe71f78d472943e64e243f6cc95a85e3f&v=4"
						 alt="avatar"
						 className="avatar-image"
					 />
						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>
							<hr />
							<p>HTML | CSS | Bootstrap | JavaScript | ReactJS | NodeJS | Express | MongoDB | Johnny-Five | p5.js</p>
							<div className="social-links">
								<a href="https://twitter.com/riQeh_" rel="noopener noreferrer" target="_blank">
									<i className="fab fa-twitter-square" aria-hidden="true" />
								</a>
								<a href="https://github.com/RickBr0wn" rel="noopener noreferrer" target="_blank">
									<i className="fab fa-github-square" aria-hidden="true" />
								</a>
								<a href="https://www.freecodecamp.org/rickbr0wn" rel="noopener noreferrer" target="_blank">
									<i className="fab fa-free-code-camp" aria-hidden="true" />
								</a>
								<a href="https://www.freecodecamp.org/rickbr0wn" rel="noopener noreferrer" target="_blank">
									<i className="fas fa-at" aria-hidden="true" />
								</a>
							</div>
					 	</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage