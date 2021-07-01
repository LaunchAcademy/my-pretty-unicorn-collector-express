import React, { useEffect, useState } from 'react'

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: ""
  })
 
  const fetchSpecificUnicorn = async () => {
    const unicornId = props.match.params.id 
    
    const response = await fetch(`/api/v1/unicorns/${unicornId}`)
    const parsedUnicorn = await response.json()
    console.log(parsedUnicorn)
    setUnicornData(parsedUnicorn.unicorn)
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
