import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../Constants/routes'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link-container">
        <ul>
          <li><Link to={routes.ABOUT_PAGE}>About Me</Link></li>
          <li><Link to={routes.PROJECTS_PAGE}>My Projects</Link></li>
          <li><Link to={routes.CONTACT_PAGE}>Contact Me</Link></li>
          <li><Link to={routes.RESUME_PAGE}>My CV</Link></li>
          <li><Link to={routes.CARD_COMPONENT}>Card Component</Link></li>
          <li><Link to={routes.SIGN_IN}>Log In</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar