import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, FormRow } from '../components'
import { inputs } from '../data/add-inputs'
import { addJob, postEditJob } from '../features/job/jobSlice'



const AddJob = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(store => store.user)
    const job = useSelector(store => store.job)
    const { isEditing, position, status, jobType, company, _id } = job

    const initialValues = {
        position: isEditing ? position : '',
        company: isEditing ? company : '',
        location: user.location || '',
        status: isEditing ? status : 'pending',
        jobType: isEditing ? jobType : 'full-time',
    }

    const [values, setValues] = useState(initialValues)

    const changeHandler = e => {
        const { name, value } = e.target
        setValues(prevState => ( {...prevState, [name]: value } ))
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(isEditing) {
            dispatch(postEditJob({ ...values, _id }))
            return
        }
        dispatch(addJob( {...values} ))
        // setValues(initialValues)
        navigate('/search')
    }

    const clearValues = () => setValues(initialValues)

    return (
        <div className='bg-white rounded-xl flex justify-center py-10'>
            <form className='flex flex-col items-end justify-center gap-6' onSubmit = {(e) => handleSubmit(e)}>
                <h2 className='text-5xl self-center mb-2 translate-x-10'> { isEditing ? 'Edit' : 'Add' } Job</h2>
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
                    <Button className='px-11 mr-2' type='button' onClick={clearValues}>Clear</Button>
                    <Button className=' px-11' background color="white">Add</Button>
                </div>
            </form>
        </div>
    )
}

export default AddJob