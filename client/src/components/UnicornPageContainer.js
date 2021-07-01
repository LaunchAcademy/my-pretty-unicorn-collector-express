import React, { useState, useEffect } from 'react'

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const fetchUnicorns = async () => {
    const responseObject = await fetch("/api/v1/unicorns")
    const unicornData = await responseObject.json()
    setUnicornObjects(unicornData.unicorns)
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  const addNewUnicornToApp = async (unicornFormFields) => {
   const response = await fetch("/api/v1/unicorns", {
     method: "POST",
     headers: new Headers({
       "Content-Type": "application/json"
     }),
     body: JSON.stringify(unicornFormFields)
   })

   const parsedUnicornResponse = await response.json()


    setUnicornObjects([...unicorns, parsedUnicornResponse.newUnicorn ])
  }

  return(
    <div>
      <UnicornFormContainer
        addNewUnicornToApp={addNewUnicornToApp}
      />

      <UnicornIndexContainer
        unicorns={unicorns}
      />
    </div>
  )
}

export default UnicornPageContainer
