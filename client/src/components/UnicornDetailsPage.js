import React, { useEffect, useState } from "react"

const UnicornDetailsPage = (props) => {

  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })

  const unicornId = props.match.params.id

  const getUnicorn = async () => {
    const response = await fetch(`/api/v1/unicorns/${unicornId}`)    
    const unicornData = await response.json()
    // console.log or debugger
    setUnicornData(unicornData.unicorn)
  }

  useEffect(() => {
    getUnicorn()
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
