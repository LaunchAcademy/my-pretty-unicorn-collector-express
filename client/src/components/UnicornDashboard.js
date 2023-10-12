import React, { useState, useEffect } from "react"

import UnicornList from "./UnicornList"
import NewUnicornForm from "./NewUnicornForm"

const UnicornDashboard = () => {
  const [unicorns, setUnicornObjects] = useState([])

  useEffect(() => {
    getAllUnicorns()
  }, [])

  const getAllUnicorns = async () => {
    const unicornResponse = await fetch("/api/v1/unicorns")
    const parsedUnicornData = await unicornResponse.json()
    setUnicornObjects(parsedUnicornData.unicorns)
  }

  return (
    <>
      <NewUnicornForm 
          setUnicornObjects={setUnicornObjects}
          existingUnicorns={unicorns}
          getAllUnicorns={getAllUnicorns}
      />

      <UnicornList unicorns={unicorns} />
    </>
  )
}

export default UnicornDashboard
