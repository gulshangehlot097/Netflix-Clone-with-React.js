import React, { useState } from 'react'
import Logo from './Images/Logo.jpeg'
import imoji from './Images/imoji.jpeg'
import './header.css'

function Header() {
  const[dark,setDark]=useState(false)

    window.onscroll=()=>{
      setDark(window.scrollY>150 ? true : false)
    }
  return (
    <header className={dark ? 'black' : ""}>
      <div className='left'>
        <img src={Logo} />
      </div>
     <div className='right'>
        <img src={imoji} />
      </div>
    </header>
  )
}

export default Header