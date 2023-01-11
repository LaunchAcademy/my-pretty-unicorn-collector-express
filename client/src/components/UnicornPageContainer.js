import React, { useState, useEffect } from "react"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const fetchUnicorns = async () => {
    // fetch
    try {
      const response = await fetch("/api/v1/unicorns")
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      // debugger
      setUnicornObjects(parsedResponse.unicorns)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  const addNewUnicornToApp = async (unicornFormFields) => {
    // POST fetch
    // console.log(unicornFormFields)
    const newUnicornObject = {
      unicorn: unicornFormFields
    }
    // console.log(newUnicornObject)
    // debugger
    try {
      const response = await fetch("/api/v1/unicorns", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json"}),
        body: JSON.stringify(newUnicornObject)
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      // debugger
      setUnicornObjects([
        ...unicorns,
        parsedResponse.newUnicorn
      ])
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  return (
    <div>
      <UnicornFormContainer addNewUnicornToApp={addNewUnicornToApp} />

      <UnicornIndexContainer unicorns={unicorns} />
    </div>
  )
}

export default UnicornPageContainer
