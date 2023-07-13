import React, { useEffect, useState } from "react"

const UnicornShowContainer = (props) => {

  // console.log(props.match.params.id)

  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })

  const fetchSpecificUnicorn = async () => {
    const response = await fetch(`/api/v1/unicorns/${props.match.params.id}`)
    const dataFromBackend = await response.json()
    console.log(dataFromBackend.unicorn)
    setUnicornData(dataFromBackend.unicorn)
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
