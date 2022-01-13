import React, { useEffect, useState } from "react"

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })

  const fetchSpecificUnicorn = async () => {
    const id = props.match.params.unicornId
    // fetch
    try {
      const response = await fetch(`/api/v1/unicorns/${id}`)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const responseBody = await response.json()
      // debugger
      setUnicornData(responseBody.unicorn)
    } catch (error) {
      console.error(error.message)
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
