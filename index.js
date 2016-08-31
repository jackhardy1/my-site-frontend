import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Notes from './modules/Notes/NotesList'
import Projects from './modules/Projects'
import Contact from './modules/Contact'
import Twitter from './modules/Twitter'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Home}/>

      <Route path="/repos" component={Repos}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/twitter" component={Twitter}/>

    </Route>
  </Router>
), document.getElementById('app'))
