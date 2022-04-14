import React, { useState, useEffect } from "react"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const fetchUnicorns = async () => {
    // fetch
  }

  const addNewUnicornToApp = async (unicornFormFields) => {
    // fetch
  }

  return (
    <div>
      <UnicornFormContainer />

      <UnicornIndexContainer unicorns={unicorns} />
    </div>
  )
}

export default UnicornPageContainer
