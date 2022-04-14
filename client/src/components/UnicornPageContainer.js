import React, { useState, useEffect } from "react"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const fetchUnicorns = async () => {
    try {
      const response = await fetch("/api/v1/unicorns")
      if (!response.ok) {
        const error = new Error(`${response.status} ${response.statusText}`)
        throw error
      }
      const responseBody = await response.json()
      setUnicornObjects(responseBody.unicorns)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  const addNewUnicornToApp = async (unicornFormFields) => {
    try {
      const response = await fetch("/api/v1/unicorns", {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
        }),
        body: JSON.stringify({ unicorn: unicornFormFields }),
      })
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const responseBody = await response.json()
      setUnicornObjects([...unicorns, responseBody.newUnicorn])
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
