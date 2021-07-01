import React, { useEffect, useState } from 'react'

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: ""
  })
 
  const fetchSpecificUnicorn = async () => {
    // fetch
  }


  useEffect(() => {
    
    fetchSpecificUnicorn()
  }, [])



  return(
    <div>
      <h4> Hello from Show </h4>
      {unicornData.unicornName}
      <br/>
      {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornShowContainer
