import React from 'react'
import './style.css'
const Dropdown = ({showDrop}) => {
  return (
    <div className={showDrop ? 'dropdown-links show-links' : 'dropdown-links'}>
        <a>Dropdown 1</a>
        <a>Dropdown 2</a>
        <a>Dropdown 3</a>
    </div>
  )
}

export default Dropdown