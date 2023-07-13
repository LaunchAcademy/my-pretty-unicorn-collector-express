import express from "express"

import Unicorn from "../../../models/Unicorn.js"

const unicornsRouter = new express.Router()

// gets all the unicorns
unicornsRouter.get("/", (req, res) => {
  console.log("yo from the backend list route")
  
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ unicorns: Unicorn.findAll() })
})

// adds a new unicorn
unicornsRouter.post("/", (req, res) => {


  console.log(req.body)

  let newUnicornId = Unicorn.getNextUnicornId()
  const newUnicorn = new Unicorn({ ...req.body.unicorn, newUnicornId })

  if (newUnicorn.save()) {
    res.status(201).json({ newUnicorn: newUnicorn })
  } else {
    res.status(422).json({ errors: newUnicorn.errors })
  }
})

// for getting a specific unicorn using its id
unicornsRouter.get("/:id", (req, res) => {

  try {
    const unicornId = req.params.id

    const unicorn = Unicorn.findById(unicornId)
    console.log(unicorn)


    res.status(200).json({ unicorn: unicorn })
  } catch(error){
    res.status(401).json({ error: { message: "YOU GOOFEd" }})
  }

})

export default unicornsRouter