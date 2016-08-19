import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import Notes from './Notes/NotesList'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Jack Hardy</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/notes" activeClassName="active">Notes</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
