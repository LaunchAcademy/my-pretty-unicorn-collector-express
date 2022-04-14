import React from "react"
import { hot } from "react-hot-loader/root"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornPageContainer from "./UnicornPageContainer"
import UnicornShowContainer from "./UnicornShowContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UnicornPageContainer} />
        <Route exact path="/unicorns" component={UnicornPageContainer} />
        <Route exact path="/unicorns/:unicornId" component={UnicornShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
