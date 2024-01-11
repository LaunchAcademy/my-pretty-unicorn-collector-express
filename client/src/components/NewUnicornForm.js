import React, { useState } from 'react'

const NewUnicornForm = (props) => {
  const [unicornFields, setUnicornFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const trackTypingIntoField = (event) => {
    setUnicornFields({
      ...unicornFields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const persistTheUnicornSomehow = (event) => {
    event.preventDefault()

    props.addUnicorn(unicornFields)
  }
  
  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={persistTheUnicornSomehow}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
            onChange={trackTypingIntoField}
            value={unicornFields.unicornName}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            onChange={trackTypingIntoField}
            value={unicornFields.unicornDescription}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default NewUnicornForm
