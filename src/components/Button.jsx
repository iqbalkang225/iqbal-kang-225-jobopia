import React from 'react'
import { useSelector } from 'react-redux'

const Button = ({ onClick, children, color, background, className }) => {

  const { isLoading } = useSelector(store => store.user)
  return (
    <button
      onClick = {onClick}
      disabled = {isLoading}
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
