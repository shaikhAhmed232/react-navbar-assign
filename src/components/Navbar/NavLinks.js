import React from 'react'
import DownArrowIcon from '../MenuIcon/DownArrowIcon'
import Dropdown from './Dropdown'
import SearchBar from '../SearchBar'
import './style.css'
const NavLinks = ({showNav}) => {
    const [showDrop, setShowDrop] = React.useState(false)
    const [clickable, setClickable] = React.useState(false)
    const toggleDrop = (e) => {
        setShowDrop(!showDrop)
    }

  return (
    <div className={showNav ? 'nav-items open-nav' : 'nav-items'}>
        <a href='#' id="home" style={{color: window && window.location.pathname === '/' ? 'black' : 'rgba(0,0,0,0.5)'}}>Home</a>
        <a href='#' id="link" style={{color: window && window.location.pathname === '/link' ? 'black' : 'rgba(0,0,0,0.5)'}}>Link</a>
        <div className="dropdown" id="dropdown" onClick={toggleDrop} style={{color: window && window.location.pathname === '/dropdown' ? 'black' : 'rgba(0,0,0,0.5)'}}>
            <span>Dropdown</span>
            <DownArrowIcon />
            <Dropdown showDrop={showDrop} setShowDrop={setShowDrop} />
        </div>
        {
            clickable ? <a href='#' disabled>Disabled</a> : <a className='disabled'>Disabled</a>
        }
        
        <SearchBar />
    </div>
  )
}

export default NavLinks