import React, { useState, useEffect } from 'react'

import UnicornTile from "./UnicornTile"

const UnicornIndexContainer = (props) => {

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

export default UnicornIndexContainer
