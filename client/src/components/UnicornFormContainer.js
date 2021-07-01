import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFields, setUnicornFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleInputFieldChange = (event) => {

  } 

  const handleFormSubmit = (event) => {
   
  }

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmit}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
