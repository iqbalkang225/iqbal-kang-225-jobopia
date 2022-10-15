import React from 'react'

const Card = ( {className, children, dark} ) => {
  return (
    <div className={`bg-white rounded-[2rem] ${className} ${dark && 'bg-black'}`}> {children} </div>
  )
}

export default Card