

import React from 'react'

function Btn() {
    const clickHandler = ()=>console.log('Mouse Over')
  return (
    <button onMouseOver={clickHandler}>
        Click me !
    </button>
  )
}

export default Btn