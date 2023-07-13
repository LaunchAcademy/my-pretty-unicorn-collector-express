import React from "react"
import { hot } from "react-hot-loader/root"

import { BrowserRouter, Route, Switch } from "react-router-dom"

// import UnicornDashboard from "./UnicornDashboard"
// import UnicornDetailsPage from "./UnicornDetailsPage"

const App = (props) => {
  return (
    <div>
      Hello from App
    </div>
  )
}

// /unicorns -> list, form
// /unicorns/:id -> show container / details page

export default hot(App)
