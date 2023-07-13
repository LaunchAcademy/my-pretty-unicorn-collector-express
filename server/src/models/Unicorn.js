import fs from "fs"
import _ from "lodash"

const unicornsPath = "unicorns.json"

class Unicorn {
  constructor({ id, unicornName, unicornDescription}) {
    this.id = id
    this.unicornName = unicornName
    this.unicornDescription = unicornDescription
  }

  static findById(id){
    const allUnicorns = this.findAll()
    const myUnicorn = allUnicorns.find(unicorn => unicorn.id == id)
    return myUnicorn
  }

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

  static getNextUnicornId() {
    const maxUnicorn = _.maxBy(this.findAll(), (unicorn) => unicorn.id)
    return maxUnicorn.id + 1
  }

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