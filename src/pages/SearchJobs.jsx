import React, { useEffect, useState } from 'react'
import { Button, Card, FormRow } from '../components'
import { inputs } from '../data/add-inputs'
import { IoIosStats, IoIosAddCircleOutline, IoIosSearch  } from 'react-icons/io'

import { fetchUserData } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'


const SearchJobs = () => {

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

    const handleSubmit = e => {
        e.preventDefault()
    }

    //change
    const dispatch = useDispatch()
    const { currentUser } = useSelector(store => store.user)

  return (
    <div className='bg-white rounded-xl p-10'>

        <div className='bg-black p-6 rounded-xl'>
            <h2 className='text-3xl font-bold mb-4 text-white'>Search</h2>
            <form className='grid lg:grid-cols-3 gap-6 lg:items-end'>
            {
                inputs.map((input,index) => {
                    return <FormRow
                                key={index}
                                direction='col'
                                onChange={changeHandler}
                                value={values[input.label]}
                                color="white"
                                {...input}
                            />
                })
            }
            <div>
                {/* <Button className='px-10 mr-2'>Clear</Button> */}
                <Button className=' px-10 py-[6px] w-full' background color="white">Clear Filters</Button>
            </div>
            </form>
        </div>

        <div className=' mt-10 mb-4 grid grid-cols-3 items-center justify-items-center'>
            <div className='bg-black w-full h-[1px]'></div>
            <h2 className='md:text-2xl'> { currentUser.jobs.length } Jobs Found</h2>
            <div className='bg-black w-full h-[1px]'></div>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>

            {
            currentUser.jobs.map((job, index) => {
                const { position, company, location, status, type } = job

                return <Card key = {index} className='bg-black text-white py-6'>
                <div className='flex items-center gap-4 px-6 pb-3'>
                    <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center'>
                        <p className='font-bold text-black'> {company.slice(0, 1).toUpperCase()} </p>
                    </div>
                    <div>
                        <p className='capitalize'> { position }  </p>
                        <p className='capitalize text-white/80 text-xs'> { company } </p>
                    </div>
                </div>

                <div className='h-0.5 bg-primary w-full'></div>

                <div className='p-6 grid grid-cols-2 gap-4'>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> { location } </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> time </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> { type } </p>
                    </div>
                    <div className= {`${status === 'pending' ? 'bg-blue' : status === 'interview' ? 'bg-magenta' : 'bg-red'} rounded-full place-self-start py-1 px-4`}>
                        <p className='capitalize'> { status } </p>
                    </div>
                </div>

                <div className='pl-6'>
                    <Button className='mr-4 px-6' >Edit</Button>
                    <Button background >Delete</Button>
                </div>
            </Card>
            })
            }

        </div>

    </div>
  )
}

export default SearchJobs