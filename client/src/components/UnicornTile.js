import React from 'react'

import { Link } from "react-router-dom"

const UnicornTile = (props) => {

  return(
    <div>
      <Link to={`/unicorns/${props.id}`} >
        {props.unicornName}
      </Link>
    </div>
  )
}

export default UnicornTile
