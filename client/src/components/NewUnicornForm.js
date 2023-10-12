import React, { useState } from 'react'

const NewUnicornForm = (props) => {
  const [unicornFields, setUnicornFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleInputChange = (event) => {
    // console.log("what they typed", event.currentTarget.value)
    // console.log("where they typed", event.currentTarget.name)

    setUnicornFields({ 
      ...unicornFields, 
      [event.currentTarget.name]: event.currentTarget.value 
    })
  }

  const dealWithTheFormSubmitting = async (event) => {
    event.preventDefault()

    const response = await fetch("/api/v1/unicorns", { 
      method: "POST",
      body: JSON.stringify({ unicorn: unicornFields }),
      headers: new Headers({
        "content-type": "application/json"
      })
    })

    const newUnicornData = await response.json()


    const existingUnicornsPlusNewOne = [...props.existingUnicorns, newUnicornData.newUnicorn]
    props.setUnicornObjects(existingUnicornsPlusNewOne)
  }

  return(
    <>
      <h1> Unicorn Form </h1>

      <form onSubmit={dealWithTheFormSubmitting}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
            onChange={handleInputChange}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            onChange={handleInputChange}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </>
  )
}

export default NewUnicornForm
