import React, { useState } from 'react'

const FormRow = ({ label, type, onChange, value, direction, required, message }) => {
  const [focus, setFocus] = useState(false)
  const handleFocus = () => setFocus(true)

  return (
    <div className={`flex ${`flex-${direction}`}`}>
      <label htmlFor={label} className='capitalize mb-1.5'>
        {label}
      </label>
      <input
        className='border border-primary p-1.5 rounded-md '
        type={type}
        name={label}
        onChange={onChange}
        value={value}
        required={required}
        onBlur={handleFocus}
        focused={focus.toString()}
      />
      <span className='text-xs text-red mt-1 error'> {message} </span>
    </div>
  )
}

export default FormRow
