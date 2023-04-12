import React, { useState, useEffect } from "react"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])

  useEffect(() => {
    getUnicorns()
  }, [])

  const getUnicorns = async () => {
    const response = await fetch("/api/v1/unicorns")
    const parsedUnicornData = await response.json()
    setUnicornObjects(parsedUnicornData.unicorns)
  }

  const addUnicorn = async (newUnicornFormStuff) => {

    const response = await fetch("/api/v1/unicorns", { 
      method: "POST", 
      body: JSON.stringify({ unicorn: newUnicornFormStuff }),
      headers: new Headers({
        "Content-Type": "application/json" 
      })
    })

    const unicornDataObject = await response.json()

    const actualUnicorn = unicornDataObject.unicorn

    setUnicornObjects([...unicorns, actualUnicorn])
  }

  return (
    <div>
      <UnicornFormContainer 
        addUnicorn={addUnicorn}
      />

      <UnicornIndexContainer unicorns={unicorns} />
    </div>
  )
}

export default UnicornPageContainer
