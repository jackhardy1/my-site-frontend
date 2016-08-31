import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import Notes from './Notes/NotesList'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Jack Hardy </h1>
          <h2 className="subtitle">Junior Javascript / Ruby Engineer looking for work</h2>
            <ul role="nav">
              <div className="top-nav">
                <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/notes" activeClassName="active">Post-It Notes</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
                <li><NavLink to="/twitter" activeClassName="active">Twitter</NavLink></li>
              </div>
            </ul>
        {this.props.children}
      </div>
    )
  }
})
