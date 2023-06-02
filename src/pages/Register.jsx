import React, { useEffect, useState } from 'react'
import { Button, FormRow, Logo } from '../components'
import { inputs } from '../data/register-inputs'
import { useSelector, useDispatch } from 'react-redux'
import { loadUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router'
import { registerUser, loginUser } from '../features/user/userThunks'


const Register = () => {

  const navigate = useNavigate()

  // const [focus, setFocus] = useState(false)
  // const handleFocus = () => setFocus(true)

  const initialValues = { name: '', email: '', password: '', confirmPassword: '', isMember: true }
  const [values, setValues] = useState(initialValues)

  const toggleForm = () => setValues(prevState => {
   return  { name: '', email: '', password: '', confirmPassword: '', isMember: !prevState.isMember }
  })


  const changeHandler = e => {
    const { name, value } = e.target
    setValues(prevState => ( {...prevState, [name]: value } ))
  }

  const { currentUser } = useSelector(store => store.user)
  const dispatch = useDispatch()

  const { user, isLoading } = useSelector(store => store.user)

  const handleSubmit = e => {
    e.preventDefault()

    const { name, email, password, confirmPassword, isMember } = values

    isMember
      ? dispatch(loginUser({ email, password }))
      : dispatch(registerUser({ name, email, password, confirmPassword }))
  }

  useEffect(() => {
    if(user) navigate('/')
  }, [user])


  return (
    // outer container
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      {/* container */}
      <div className='w-96 bg-white p-10 rounded-xl'>
        <Logo color='black' className='mx-auto' />
        <h3 className='text-3xl mt-7 mb-4'>
          {values.isMember ? 'Login' : 'Register'}
        </h3>
        {/* register form */}
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          {inputs.map((input, index) => {
            if (values.isMember && index === 0) return null
            if (values.isMember && index === 3) return null
            return (
              <FormRow
                key={index}
                direction='col'
                onChange={changeHandler}
                value={values[input.label]}
                // focus={focus}
                // handleFocus={handleFocus}
                {...input}
              />
            )
          })}
          {/* buttons container */}
          <div className='flex flex-col gap-2'>
            <Button background color='white'>
              {isLoading ? 'loading...' : 'submit'}
            </Button>
            {/* <Button color='black'>demo app</Button> */}
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
