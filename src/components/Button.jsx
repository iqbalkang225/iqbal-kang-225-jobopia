import React from 'react'

const Button = ({ onClick, children, color, background, className }) => {
  return (
    <button
      onClick = {onClick}
      className={`text-${color} py-2.5 px-5 rounded-lg capitalize ${className}  ${
        !background
          ? 'outline outline-1 outline-primary hover:text-primary'
          : 'bg-gradient-to-r from-primary to-red hover:bg-gradient-to-l from-primary to-red'
      } `}
    >
      {children}
    </button>
  )
}

export default Button
