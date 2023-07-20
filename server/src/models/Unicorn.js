import fs from "fs"
import _ from "lodash"

const unicornsPath = "unicorns.json"

class Unicorn {
  // dont forget, there is object destructuring right here!
  constructor({ id, unicornName, unicornDescription}) {
    this.id = id
    this.unicornName = unicornName
    this.unicornDescription = unicornDescription
  }

  // takes an id, and retrieves the uncorn from the unicorns.json file by that id
  static findById(id){
    const allUnicorns = this.findAll()
    const myUnicorn = allUnicorns.find(unicorn => unicorn.id == id)
    return myUnicorn
  }

  // retrieves all unicorns from the json file and returns them as objects
  static findAll() {
    const unicornData = JSON.parse(fs.readFileSync(unicornsPath))

    const unicornObjects = unicornData.map(unicorn => {
      return new Unicorn(unicorn)

    })
    return unicornObjects
  }

  isValid() {
    if (this.unicornName === ""){
      return false 
    } else {
      return true
    }
  }

  // automatically called by save to make a new id
  static getNextUnicornId() {
    const maxUnicorn = _.maxBy(this.findAll(), (unicorn) => unicorn.id)
    return maxUnicorn.id + 1
  }

  // called to persist to the json file. Will run `isValid()` to ensure a name is present
  save() {
    if (this.isValid()) {
      this.id = this.constructor.getNextUnicornId()
      const unicorns = this.constructor.findAll()
      unicorns.push(this)
      fs.writeFileSync(unicornsPath, JSON.stringify(unicorns))
      return true
    } else {
      return false
    }
  }
}

export default Unicorn