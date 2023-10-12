import React, { useEffect, useState } from "react"

const UnicornDetailsPage = (props) => {

  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })

  const id = props.match.params.id

  const getSpecificUnicorn = async () => {
    const responseWithUnicorn = await fetch(`/api/v1/unicorns/${id}`)
    const unicornData = await responseWithUnicorn.json()
    setUnicornData(unicornData.unicorn)
  }

  useEffect(() => {
    getSpecificUnicorn()
  }, [])


  return (
    <div>
      <h4> Here is the graceful unicorn: {unicornData.unicornName}</h4>
      <br />
      {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornDetailsPage
