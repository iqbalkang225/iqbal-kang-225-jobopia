import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, FormRow } from '../components'
import { inputs } from '../data/add-inputs'



const AddJob = () => {

    const { currentUser } = useSelector(store => store.user)

    const initialValues = {
        position: '',
        company: '',
        location: '',
        status: '',
        type: '',
    }

    const [values, setValues] = useState(initialValues)

    const changeHandler = e => {
        const { name, value } = e.target
        setValues(prevState => ( {...prevState, [name]: value } ))
    }

    const sendData = async () => {
    }

    const handleSubmit = e => {
        e.preventDefault()

        sendData()    
    }

    return (
        <div className='bg-white rounded-xl flex justify-center py-10'>
            <form className='flex flex-col items-end justify-center gap-6' onSubmit = {(e) => handleSubmit(e)}>
                <h2 className='text-5xl self-center mb-2 translate-x-10'>Add Job</h2>
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
                    <Button className='px-11 mr-2'>Clear</Button>
                    <Button className=' px-11' background color="white">Add</Button>
                </div>
            </form>
        </div>
    )
}

export default AddJob