import React, { useState } from 'react'
import { Button, Card, FormRow } from '../components'
import { inputs } from '../data/add-inputs'
import { IoIosStats, IoIosAddCircleOutline, IoIosSearch  } from 'react-icons/io'

const SearchJobs = () => {

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
            <h2 className='md:text-2xl'>6 Jobs Found</h2>
            <div className='bg-black w-full h-[1px]'></div>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            <Card className='bg-black text-white py-6'>
                <div className='flex items-center gap-4 px-6 pb-3'>
                    <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center'>
                        <p className='font-bold text-black'>T</p>
                    </div>
                    <div>
                        <p className='capitalize'>web dev</p>
                        <p className='capitalize text-white/80 text-xs'>tyler</p>
                    </div>
                </div>

                <div className='h-0.5 bg-primary w-full'></div>

                <div className='p-6 grid grid-cols-2 gap-4'>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='bg-blue rounded-full place-self-start py-1 px-4'>
                        <p className='capitalize'>pending</p>
                    </div>
                </div>

                <div className='pl-6'>
                    <Button className='mr-4 px-6' >Edit</Button>
                    <Button background >Delete</Button>
                </div>
            </Card>

            <Card className='bg-black text-white py-6'>
                <div className='flex items-center gap-4 px-6 pb-3'>
                    <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center'>
                        <p className='font-bold text-black'>T</p>
                    </div>
                    <div>
                        <p className='capitalize'>web dev</p>
                        <p className='capitalize text-white/80 text-xs'>tyler</p>
                    </div>
                </div>

                <div className='h-0.5 bg-primary w-full'></div>

                <div className='p-6 grid grid-cols-2 gap-4'>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='bg-blue rounded-full place-self-start py-1 px-4'>
                        <p className='capitalize'>pending</p>
                    </div>
                </div>

                <div className='pl-6'>
                    <Button className='mr-4 px-6' >Edit</Button>
                    <Button background>Delete</Button>
                </div>
            </Card>

            <Card className='bg-black text-white py-6'>
                <div className='flex items-center gap-4 px-6 pb-3'>
                    <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center'>
                        <p className='font-bold text-black'>T</p>
                    </div>
                    <div>
                        <p className='capitalize'>web dev</p>
                        <p className='capitalize text-white/80 text-xs'>tyler</p>
                    </div>
                </div>

                <div className='h-0.5 bg-primary w-full'></div>

                <div className='p-6 grid grid-cols-2 gap-4'>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosAddCircleOutline size={24} />
                        <p className='capitalize'> modesto </p>
                    </div>
                    <div className='bg-blue rounded-full place-self-start py-1 px-4'>
                        <p className='capitalize'>pending</p>
                    </div>
                </div>

                <div className='pl-6'>
                    <Button className='mr-4 px-6' >Edit</Button>
                    <Button background>Delete</Button>
                </div>
            </Card>
        </div>

    </div>
  )
}

export default SearchJobs