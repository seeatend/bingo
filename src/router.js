import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

// Components
import Home from './components/pages/home'
import Matches from './components/pages/matches'

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact={true} />
    <Route path="/matches" component={Matches} exact={true} />
    <Redirect to="/" />
  </BrowserRouter>
)

export default Router
