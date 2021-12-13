import React from 'react'
import './Header.css'
import punkLogo from '../assets/cryptopunk-logo.png'
import search from '../assets/search.png'
import themeSwitch from '../assets/theme-switch.png'

const Header = () => {
  return (
    <div className="header">
      <img src={punkLogo} className='punkLogo' alt='Punk Logo'/>
      <div className='navItems'>
        <div className='searchBar'>
          <div className='searchIconContainer'>
            <img src={search} className='searchIcon' alt='Search Icon' />
          </div>
          <input className='searchInput' placeholder='Collection, Item, or User...' />
        </div>
        <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
        </div>
        <div className='headerActions'>
          <div className='themeSwitchContainer'>
            <img src={themeSwitch} className='themeSwitchIcon' alt='' />
          </div>
        </div>
        <div className='loginButton'>GET IN</div>
      </div>
    </div>
  )
}

export default Header
