import React, { useState } from 'react'
import { Button, FormRow } from '../components'
import { inputs } from '../data/register-inputs'
import logo2 from '../assets/logo2.png'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }

  const [values, setValues] = useState(initialValues)

  // const trying = useSelector(store => store.user)

  const dispatch = useDispatch()

  const toggleForm = () =>
    setValues(prevState => ({
      name: '',
      email: '',
      password: '',
      isMember: !prevState.isMember,
    }))

  const changeHandler = e => {
    const { name, value } = e.target

    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { name, email, password, isMember } = values
    isMember
      ? dispatch(loginUser({ email, password }))
      : dispatch(registerUser({ email, password }))
  }

  return (
    // outer container
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      {/* container */}
      <div className='w-96 bg-white p-10 rounded-xl'>
        <img src={logo2} alt='logo' className='h-16 mx-auto' />
        <h3 className='text-3xl mt-7 mb-4'>
          {values.isMember ? 'Login' : 'Register'}
        </h3>
        {/* register form */}
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          {inputs.map((input, index) => {
            if (values.isMember && index === 0) return null
            return (
              <FormRow
                key={index}
                direction='col'
                onChange={changeHandler}
                value={values[input.label]}
                {...input}
              />
            )
          })}
          {/* buttons container */}
          <div className='flex flex-col gap-2'>
            <Button background color='white'>
              submit
            </Button>
            <Button color='black'>demo app</Button>
          </div>
          <p className='self-center'>
            {!values.isMember ? 'Already a member' : 'Not a member yet?'}
            <button
              type='button'
              className='ml-1 text-primary hover:scale-95 duration-100'
              onClick={toggleForm}
            >
              {!values.isMember ? 'Login' : 'Register'}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
