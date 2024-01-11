import React from "react"
import { hot } from "react-hot-loader/root"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornDashboard from "./UnicornDashboard"
import UnicornDetailsPage from "./UnicornDetailsPage"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/unicorns" component={UnicornDashboard} />      
        <Route exact path="/unicorns/:id" component={UnicornDetailsPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
