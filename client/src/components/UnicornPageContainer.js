import React, { useState, useEffect } from "react"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const fetchUnicorns = async () => {
    try {
      const response = await fetch("/api/v1/unicorns")
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const responseBody = await response.json()
      // debugger
      setUnicornObjects(responseBody.unicorns)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  const addNewUnicornToApp = async (unicornFormFields) => {
    // POST fetch
    // console.log(unicornFormFields)
    try {
      const response = await fetch("/api/v1/unicorns", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ unicorn: unicornFormFields }),
      })
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const responseBody = await response.json()
      // debugger
      console.log(responseBody);
      setUnicornObjects([
        ...unicorns,
        responseBody.newUnicorn
      ])
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
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
