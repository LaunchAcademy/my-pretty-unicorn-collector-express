import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFields, setUnicornFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleInputFieldChange = (event) => {
    setUnicornFields({
      ...unicornFields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  } 

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const unicornPayload = {
      unicorn: unicornFields
    }
    
    props.addNewUnicornToApp(unicornPayload)
  }

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmit}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
            onChange={handleInputFieldChange}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            onChange={handleInputFieldChange}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
