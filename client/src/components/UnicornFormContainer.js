import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFields, setUnicornFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleTyping = (event) => {
    setUnicornFields({ 
      ...unicornFields,
      [event.currentTarget.name]: event.currentTarget.value 
    })
  }

  const handleFormSubmitting = async (event) => {
    event.preventDefault()

    const response = await fetch("/api/v1/unicorns", { 
      method: "POST",
      body: JSON.stringify({ unicorn: unicornFields }),
      headers: new Headers({ 
        "Content-Type": "application/json"
      })
    })

    const newUnicornData = await response.json()
    

    const newUnicornArray = [...props.unicorns, newUnicornData.newUnicorn]
    props.setUnicornObjects(newUnicornArray)
  }

  const clearForm = () => {
    setUnicornFields({
      unicornName: "",
      unicornDescription: ""
    })
  }

  console.log(unicornFields)

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmitting}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
            onChange={handleTyping}
            value={unicornFields.unicornName}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            onChange={handleTyping}
            value={unicornFields.unicornDescription}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
      <button onClick={clearForm}>Clear</button>
    </div>
  )
}

export default UnicornFormContainer
