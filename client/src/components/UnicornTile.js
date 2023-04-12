import React from 'react'

import { Link } from "react-router-dom"

const UnicornTile = (props) => {

  return(
    <div>
        <li>
          <Link to={`/unicorns/${props.id}`}>
            {props.unicornName} 
          </Link>
        </li>
    </div>
  )
}

export default UnicornTile
