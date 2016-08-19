import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Notes from './modules/Notes/Notes'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

    <IndexRoute component={Home}/>

      <Route path="/repos" component={Repos}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>

    </Route>
  </Router>
), document.getElementById('app'))
