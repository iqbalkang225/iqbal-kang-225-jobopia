import React, { useState } from 'react'
import { inputs } from '../data/profile-inputs'
import { Button, FormRow } from '../components'

const Profile = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        }
    
    const [values, setValues] = useState(initialValues)
    
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
    }

    return (
        <div className='bg-white rounded-xl flex justify-center py-10'>
            <form className='flex flex-col items-end justify-center gap-6'>
                <h2 className='text-5xl self-center mb-2 translate-x-10'>Profile</h2>
                {
                    inputs.map((input,index) => {
                        return <FormRow
                                    key={index}
                                    direction='row'
                                    onChange={changeHandler}
                                    value={values[input.label]}
                                    {...input}
                                />
                    })
                }
                <div>
                    <Button className='px-10 mr-2'>Clear</Button>
                    <Button className=' px-10' background color="white">Add</Button>
                </div>
            </form>
        </div>
      )
}

export default Profile