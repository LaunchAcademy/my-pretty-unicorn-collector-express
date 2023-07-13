import React from 'react'

import UnicornTile from "./UnicornTile"

const UnicornList = (props) => {

  const unicornComponentTiles = props.unicorns.map((unicornObject) => {
    return(
      <UnicornTile
        key={unicornObject.id}
        id={unicornObject.id}
        unicornName={unicornObject.unicornName}
        unicornDescription={unicornObject.unicornDescription}
      />
    )
  })

  return(
    <div>
      <h1> Unicorn List </h1>
      {unicornComponentTiles}
    </div>
  )
}

export default UnicornList
