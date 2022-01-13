import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFields, setUnicornFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleInputFieldChange = (event) => {
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    setUnicornFields({
      ...unicornFields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  } 

  const handleFormSubmit = (event) => {
    event.preventDefault()
    
    props.addNewUnicornToApp(unicornFields)
  }

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmit}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
            value={unicornFields.unicornName}
            onChange={handleInputFieldChange}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            value={unicornFields.unicornDescription}
            onChange={handleInputFieldChange}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
