import express from "express"

import Unicorn from "../../../models/Unicorn.js"

const unicornsRouter = new express.Router()

unicornsRouter.get("/", (req, res) => {
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ unicorns: Unicorn.findAll() })
})

unicornsRouter.post("/", (req, res) => {
  let newUnicornId = Unicorn.getNextUnicornId()
  const newUnicorn = new Unicorn({ ...req.body.unicorn, newUnicornId })

  if (newUnicorn.save()) {
    res.status(201).json({ newUnicorn })
  } else {
    res.status(422).json({ errors: newUnicorn.errors })
  }
})

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