import React, { useEffect, useState } from "react"

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })

  const getSpecificUnicorn = async () => {
    const unicornId = props.match.params.id
    debugger

    const response = await fetch(`/api/v1/unicorns/${unicornId}`)
    const parsedUnicornData = await response.json()
    setUnicornData(parsedUnicornData.unicorn)
  }

  useEffect(() => {
    getSpecificUnicorn()
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
