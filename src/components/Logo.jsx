import React from 'react'
import logoWhite from '../assets/logo-white.png'
import logoBlack from '../assets/logo-black.png'

const Logo = ({ className, color }) => {
  return (
    <img
      className={`h-16 ${className}`}
      src={color ? logoBlack : logoWhite}
      alt='logo'
    />
  )
}

export default Logo
