import React, { useState, useEffect } from "react"

import UnicornList from "./UnicornList"
import NewUnicornForm from "./NewUnicornForm"

const UnicornDashboard = () => {
  const [unicorns, setUnicornObjects] = useState([])

  // useEffect(() => {
  // }, [])

  return (
    <div>
      <NewUnicornForm />

      <UnicornList unicorns={unicorns} />
    </div>
  )
}

export default UnicornDashboard
