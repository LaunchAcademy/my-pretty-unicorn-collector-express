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
    props.addUnicorn(unicornFields)
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
            value={unicornFields.unicornName}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            onChange={handleInputFieldChange}
            value={unicornFields.unicornDescription}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
