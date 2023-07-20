import React, { useEffect, useState } from "react"

const UnicornDetailsPage = (props) => {

  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: "",
  })


  return (
    <div>
      <h4> Here is the graceful unicorn: {unicornData.unicornName}</h4>
      <br />
      {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornDetailsPage
