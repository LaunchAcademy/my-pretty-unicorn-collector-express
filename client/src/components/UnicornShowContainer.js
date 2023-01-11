import React, { useEffect, useState } from "react"

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })
  // debugger
  const fetchSpecificUnicorn = async () => {
    // fetch
    const unicornId = props.match.params.id
    try {
      const response = await fetch(`/api/v1/unicorns/${unicornId}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      // debugger
      setUnicornData(parsedResponse.unicorn)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchSpecificUnicorn()
  }, [])

  return (
    <div>
      <h4> Hello from Show </h4>
      {unicornData.unicornName}
      <br />
      {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornShowContainer
