import React from 'react'

import { Link } from "react-router-dom"

const UnicornTile = ({ id, unicornName }) => {

  return(
    <div>
        <Link to={`/unicorns/${id}`}>
          { unicornName }
        </Link>
    </div>
  )
}

export default UnicornTile
