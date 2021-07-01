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
    const myUnicorn = allUnicorns.find(launcher => launcher.id == id)
    return myUnicorn
  }

  static findAll() {
    const unicornData = JSON.parse(fs.readFileSync(unicornsPath))

    let unicorns = []
    unicornData.forEach(unicorn => {
      const newUnicorn = new Unicorn(unicorn)
      unicorns.push(newUnicorn)
    })
    return unicorns
  }

  isValid() {
    this.errors = {}
    const requiredFields = ["unicornName"]
    let isValid = true

    for (const requiredField of requiredFields) {
      this.errors[requiredField] = []
      if (!this[requiredField]) {
        isValid = false
        this.errors[requiredField].push("can't be blank")
      }
    }
    return isValid
  }

  static getNextUnicornId() {
    const maxUnicorn = _.maxBy(this.findAll(), (unicorn) => unicorn.id)
    return maxUnicorn.id + 1
  }

  save() {
    if (this.isValid()) {
      delete this.errors
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