import React, { useState } from 'react'

const NewUnicornForm = (props) => {
  const [unicornFields, setUnicornFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form>
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

export default NewUnicornForm
