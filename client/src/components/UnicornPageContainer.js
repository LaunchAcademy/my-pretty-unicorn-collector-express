import React, { useState, useEffect } from "react"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const getUnicorns = async () => {
    const response = await fetch("/api/v1/unicorns")
    const unicornData = await response.json()
    // console.log(unicornData.unicorns)
    setUnicornObjects(unicornData.unicorns)
  }

  useEffect(() => {
    getUnicorns()
  }, [])

  return (
    <div>
      <UnicornFormContainer 
        setUnicornObjects={setUnicornObjects}
        unicorns={unicorns}
      />

      <UnicornIndexContainer unicorns={unicorns} />
    </div>
  )
}

export default UnicornPageContainer
