import React from "react"
import { hot } from "react-hot-loader/root"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornPageContainer from "./UnicornPageContainer"
import UnicornShowContainer from "./UnicornShowContainer"

// import UnicornPageContainer from "./UnicornPageContainer"
// import UnicornShowContainer from "./UnicornShowContainer"
// import UnicornIndexContainer from "./UnicornIndexContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/unicorns" component={UnicornPageContainer} />
        <Route exact path="/unicorns/:id" component={UnicornShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

// /unicorns -> list, form
// /unicorns/:id -> show container / details page

export default hot(App)
