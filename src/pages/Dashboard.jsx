import React, { useEffect } from 'react'
import { Card } from '../components'
import { IoIosStats, IoIosAddCircleOutline, IoIosSearch  } from 'react-icons/io'

import { fetchUserData } from '../features/user/userSlice'
import { db } from '../firebase'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
   

    const dispatch = useDispatch()
    const { currentUser } = useSelector(store => store.user)
    // const currentUser = useSelector(store => store.user)
    // console.log(currentUser)

    // // //change
    useEffect(() => {
        const userRef = collection(db, 'users')
        onSnapshot(doc(userRef, currentUser.email), (snapshot) => {
            dispatch(fetchUserData(snapshot.data()))
        })
    }, [])

    const getStatusCount = (jobStatus) => currentUser?.jobs?.filter((job) => job.status === jobStatus).length

    const calcPercentage = () => {}

    // const getStatusCount = () => {}

  return (
    <div className='grid sm:grid-cols-2 gap-6 md:grid-cols-3'>
        <Card className='flex flex-col'>
            <div className='p-4 pb-1 px-4 self-end'>
                <IoIosAddCircleOutline className= 'h-[40px] w-[40px] lg:h-[36px] lg:w-[36px]' />
            </div>
            <div className='w-full h-0.5 bg-blue'></div>
            <div className='p-4 flex flex-col'>
                <p className='font-bold text-2xl'>Pending</p>
                <p className='mb-5 text-4xl font-extralight'>Applications</p>
                <h2 className='text-7xl self-center text-blue md:text-5xl lg:text-7xl'> {getStatusCount('pending') || 0} </h2>
            </div>
        </Card>
        
        <Card className='flex flex-col'>
            <div className='p-4 pb-1 px-4 self-end'>
                <IoIosAddCircleOutline className= 'h-[40px] w-[40px] lg:h-[36px] lg:w-[36px]' />
            </div>
            <div className='w-full h-0.5 bg-magenta'></div>
            <div className='p-4 flex flex-col'>
                <p className='font-bold text-2xl'>Interviews</p>
                <p className='mb-5 text-4xl font-extralight'>Scheduled</p>
                <h2 className='text-7xl self-center text-magenta md:text-5xl lg:text-7xl'> {getStatusCount('interview')} </h2>
            </div>
        </Card>

        <Card className='flex flex-col'>
            <div className='p-4 pb-1 px-4 self-end'>
                <IoIosAddCircleOutline className= 'h-[40px] w-[40px] lg:h-[36px] lg:w-[36px]' />
            </div>
            <div className='w-full h-0.5 bg-red'></div>
            <div className='p-4 flex flex-col'>
                <p className='font-bold text-2xl'>Jobs</p>
                <p className='mb-5 text-4xl font-extralight'>Declined</p>
                <h2 className='text-7xl self-center text-red md:text-5xl lg:text-7xl'> {getStatusCount('declined')} </h2>
            </div>
        </Card>

        <Card className='flex flex-col col-span-2 lg:col-span-1 w-full order-1'>
            <div className='relative font-bold text-white text-xl flex justify-center h-[300px] pt-24 ml-10 lg:-ml-4'>
                <div className='absolute bg-blue left-8 w-[200px] h-[200px] rounded-full flex items-center justify-center border'>70%</div>
                <div className='absolute left-50 top-4 bg-magenta w-[130px] h-[130px] rounded-full flex items-center justify-center border-[1.6px] lg:left-[160px]'>20%</div>
                <div className='absolute top-28 left-52 bg-red w-[100px] h-[100px] rounded-full flex items-center justify-center border-[1.6px] lg:left-48 lg:top-22'>10%</div>
            </div>

            <div className='text-black flex flex-col gap-1 pl-10 mt-10 mb-6'>
                <div className='flex gap-1 items-center'>
                    <div className='bg-blue h-[16px] w-[16px]'></div>
                    <p>Pending</p>
                </div>

                <div className='flex gap-1 items-center'>
                    <div className='bg-magenta h-[16px] w-[16px]'></div>
                    <p>Interviews</p>
                </div>

                <div className='flex gap-1 items-center'>
                    <div className='bg-red h-[16px] w-[16px]'></div>
                    <p>Declined</p>
                </div>
            </div>
        </Card>

        <Card className='h-[300px] flex flex-col md:h-full col-span-2'>
            <h1>dsf</h1>
          
        </Card>

    </div>

  )
}

export default Dashboard