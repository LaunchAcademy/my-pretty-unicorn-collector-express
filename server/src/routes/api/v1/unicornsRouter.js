import express from "express"

import Unicorn from "../../../models/Unicorn.js"

const unicornsRouter = new express.Router()

// index / list
unicornsRouter.get("/", (req, res) => {

  res.set({ 'Content-Type': 'application/json' }).status(200).json({ unicorns: Unicorn.findAll() })
})

// a post endpoint for adding a new unicorn
unicornsRouter.post("/", (req, res) => {


  const unicornData = req.body.unicorn 

  console.log(unicornData)

  // let newUnicornId = Unicorn.getNextUnicornId()

  const newUnicorn = new Unicorn({ ...req.body.unicorn })

  if (newUnicorn.save()) {
    res.status(201).json({ unicorn: newUnicorn })
  } else {
    res.status(422).json({ errors: newUnicorn.errors })
  }
})


// for the unicorn show page
unicornsRouter.get("/:id", (req, res) => {

  try {
    const unicornId = req.params.id

    const unicorn = Unicorn.findById(unicornId)
    console.log(unicorn)


    res.status(200).json({ unicorn: unicorn })
  } catch(error){
    res.status(401).json({ error: { message: "YOU GOOFED" }})
  }

})

export default unicornsRouter