import React, { useState } from 'react'
import { inputs } from '../data/profile-inputs'
import { Button, FormRow } from '../components'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {

    const dispatch = useDispatch()
    const { currentUser } = useSelector(store => store.user)

    const initialValues = {
        firstName: currentUser.name || '',
        lastName: currentUser.lastName || '',
        location: currentUser.location || '',
        email: currentUser.email || '',
    }

    const [values, setValues] = useState(initialValues)

    const changeHandler = e => {
        const { name, value } = e.target
        setValues(prevState => ( {...prevState, [name]: value } ))
        console.log(values)
    }

    const { email } = useSelector(store => store.user.currentUser)
    
    const handleSubmit = e => {
        e.preventDefault()

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