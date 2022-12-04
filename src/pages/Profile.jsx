import React, { useState } from 'react'
import { inputs } from '../data/profile-inputs'
import { Button, FormRow } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../features/user/userThunks'

const Profile = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(store => store.user)

    const initialValues = {
        name: user.name || '',
        lastName: user.lastName || '',
        location: user.location || '',
        email: user.email || '',
    }

    const [values, setValues] = useState(initialValues)

    const changeHandler = e => {
        const { name, value } = e.target
        setValues(prevState => ( {...prevState, [name]: value } ))
    }

    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateUser({...values}))
    }

    return (
        <div className='bg-white rounded-xl flex justify-center py-10'>
            <form className='flex flex-col items-end justify-center gap-6' onSubmit={handleSubmit}>
                <h2 className='text-5xl self-center mb-2 translate-x-10'>Profile</h2>
                {
                    inputs.map((input,index) => {
                        return <FormRow
                                    key={index}
                                    direction='row'
                                    onChange={changeHandler}
                                    value={values[input.text] || values[input.label]}
                                    {...input}
                                />
                    })
                }
                <div>
                    <Button className='px-11 mr-2'>Clear</Button>
                    <Button className=' px-11' background color="white">Add</Button>
                </div>
            </form>
        </div>
      )
}

export default Profile