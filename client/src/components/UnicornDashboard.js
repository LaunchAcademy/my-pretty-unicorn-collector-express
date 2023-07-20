import React, { useState, useEffect } from "react"

import UnicornList from "./UnicornList"
import NewUnicornForm from "./NewUnicornForm"

const UnicornDashboard = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const getUnicorns = async () => {
    const responseData = await fetch("/api/v1/unicorns")
    const unicornData = await responseData.json()
    console.log(unicornData.unicorns) 
    setUnicornObjects(unicornData.unicorns)
  }

  useEffect(() => {
    getUnicorns()
  }, [])

  const addUnicorn = async (formStuff) => {

    const response = await fetch("/api/v1/unicorns", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }), 
      body: JSON.stringify({ unicorn: formStuff })
    })

    const unicornData = await response.json()
    
    setUnicornObjects([...unicorns, unicornData.newUnicorn])
  }

  return (
    <div>
      <NewUnicornForm addUnicorn={addUnicorn} />

      <UnicornList unicorns={unicorns} />
    </div>
  )
}

export default UnicornDashboard
