import React, { useEffect, useState } from "react"

const UnicornDetailsPage = (props) => {


  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })


  return (
    <div>
      <h4> Hello from Show </h4>
      {unicornData.unicornName}
      <br />
      {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornDetailsPage
