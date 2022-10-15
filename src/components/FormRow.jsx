import React, { useState } from 'react'

const FormRow = ({ label, type, onChange, value, direction, required, message, options }) => {
  const [focus, setFocus] = useState(false)
  const handleFocus = () => setFocus(true)

  if(type==='select') {
    return (
      <div className={`flex ${`flex-${direction} items-center gap-6`}`}>
        <label htmlFor={label} className='capitalize mb-1.5'>
          {label}
        </label>
        <div>
          <select className='border border-primary p-1.5 rounded-md w-60 outline-none'>
            {options.map(option => <option> {option} </option>)}
          </select>
          <span className='text-xs text-red mt-1 error'> {message} </span>
        </div>
      </div>
    )

  }

  return (
    <div className={`flex ${`flex-${direction} ${direction === 'row' && 'gap-6'}`}`}>
      <label htmlFor={label} className='capitalize mb-1.5'>
        {label}
      </label>
      <div>
        <input
          className={`border border-primary p-1.5 rounded-md w-full ${direction === 'row' && 'w-60'}`}
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
    </div>
  )
}

export default FormRow
