import React, { useState } from 'react'

const FormRow = ({ text, label, type, onChange, value, disabled, direction, required, message, options, color }) => {

  const [focus, setFocus] = useState(false)
  const handleFocus = () => setFocus(true)

  if(type==='select') {
    return (
      <div className={`flex ${`flex-${direction} ${direction === 'row' && 'gap-6 items-center'}`}`}>

        <label htmlFor={label} className='capitalize mb-1.5'>
          {label}
        </label>

        <div>
          <select 
            onChange = {onChange}
            name = {label}
            value = {value}
            className={`border border-primary p-1.5 rounded-md w-full outline-none ${direction === 'row' && 'w-[250px]'}`}>
            {
              options.map((option,index) => <option key={index} value={option}> {option} </option>)
            }
          </select>
          <span className='text-xs text-red mt-1 error'> {message} </span>
        </div>

      </div>
    )
  }

  return (
    <div className={`flex ${`flex-${direction} ${direction === 'row' && 'gap-6'}`}`}>
      <label htmlFor={label} className={`capitalize mb-1.5 text-${color}`}>
        {label}
      </label>
      <div>
        <input
          className={`border border-primary p-1.5 rounded-md w-full ${direction === 'row' && 'w-[250px]'}`}
          type={type}
          name={text || label}
          onChange={onChange}
          value={value}
          required={required}
          onBlur={handleFocus}
          disabled = {disabled}
          focused={focus.toString()}
        />
        <span className='text-xs text-red mt-1 error'> {message} </span>
      </div>
    </div>
  )
}

export default FormRow
