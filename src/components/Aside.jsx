import React, { useRef } from 'react'
import logo from '../assets/logo-black.png'
import image from '../assets/image.svg'
import { IoIosStats, IoIosAddCircleOutline, IoIosSearch  } from 'react-icons/io'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentPage } from '../features/ui/uiSlice'

const Aside = () => {
  
  const dashRef = useRef()
  const allJobsRef = useRef()
  const addJobsRef = useRef()
  const profileRef = useRef()

  
  const dispatch = useDispatch()
  const updateCurrentPageHandler = (page) => dispatch( updateCurrentPage(page.current.text) )

  const {isAsideOpen} = useSelector(store => store.ui)

  return (
    <div className = {`absolute z-10 w-4/5 left-1/2 -translate-x-1/2 bg-white lg:relative lg:w-auto lg:left-0 lg:translate-x-0 lg:col-span-2 h-screen flex-col duration-200 ${!isAsideOpen && 'hidden '}`}>

      <button className='absolute right-4 top-4 hover:text-primary duration-100 lg:hidden'>
        <IoCloseCircleOutline size={32}/>
      </button>

      <img src = {logo} alt="jobopia logo" className='w-48 pl-5 my-10' />

      <nav>
        <ul className='flex flex-col gap-4'>
          <li className='w-4/5'>
            <Link 
              to = "/" 
              ref = {dashRef}
              onClick = { updateCurrentPageHandler.bind(null, dashRef) }
              className='py-2 pl-5 flex items-center rounded-r-full hover:bg-gradient-to-r from-primary to-red hover:text-white '>
              <IoIosStats className='mr-3' size={32} />
              Dashboard
            </Link>
          </li>
          
          <li className='w-4/5'>
            <Link 
              to = "add" 
              ref = {addJobsRef}
              onClick = { updateCurrentPageHandler.bind(null, addJobsRef) }
              className='py-2 pl-5 flex items-center rounded-r-full hover:bg-gradient-to-r from-primary to-red hover:text-white '>
              <IoIosAddCircleOutline className='mr-3' size={32} />
              Add Job
            </Link>
          </li>

          <li className='w-4/5'>
            <Link 
              to = "search" 
              ref = {allJobsRef}
              onClick = { updateCurrentPageHandler.bind(null, allJobsRef) }
              className='py-2 pl-5 flex items-center rounded-r-full hover:bg-gradient-to-r from-primary to-red hover:text-white '>
              <IoIosSearch className='mr-3' size={32} />
              All Jobs
            </Link>
          </li>

          <li className='w-4/5'>
            <Link 
              to = "profile" 
              ref = {profileRef}
              onClick = { updateCurrentPageHandler.bind(null, profileRef) }
              className='py-2 pl-5 flex items-center rounded-r-full hover:bg-gradient-to-r from-primary to-red hover:text-white '>
              <AiOutlineUser className='mr-3' size={32} />
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      {/* <img src={image} className="absolute w-80 bottom-10 opacity-80 pl-5 " /> */}

    </div>
  )
}

export default Aside