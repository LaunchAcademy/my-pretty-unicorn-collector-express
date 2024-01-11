import React, { useState, useEffect } from "react"

import UnicornList from "./UnicornList"
import NewUnicornForm from "./NewUnicornForm"

const UnicornDashboard = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const getUnicorns = async () => {
    const response = await fetch("/api/v1/unicorns")
    const unicornData = await response.json()

    setUnicornObjects(unicornData.unicorns)
  }

  const addUnicorn = async (newUnicorn) => {

    const response = await fetch("/api/v1/unicorns", { 
      method: "POST", 
      body: JSON.stringify({ unicorn: newUnicorn }), 
      headers: new Headers({"content-type": "application/json"})
    })

    const postResponseData = await response.json()

    setUnicornObjects([...unicorns, postResponseData.newUnicorn])
  }

  useEffect(() => {
    getUnicorns()
  }, [])

  return (
    <div>
      <NewUnicornForm addUnicorn={addUnicorn} />

      <UnicornList unicorns={unicorns} />
    </div>
  )
}

export default UnicornDashboard
