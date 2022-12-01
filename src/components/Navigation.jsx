import React from 'react'
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { IoChevronDown } from 'react-icons/io5'
import { Button } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAside, toggleLogout } from '../features/ui/uiSlice'
import { useNavigate } from 'react-router'
import { current } from '@reduxjs/toolkit'

const Navigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentPage, isLogoutOpen } = useSelector(store => store.ui)
  // const { name } = useSelector(store => store.user.currentUser)

  const toggleAsideHandler = () => dispatch( toggleAside() ) 

  const toggleLogoutHandler = () => dispatch( toggleLogout() )

  const logOut = async () => {
    navigate('/landing')
  }

  return (
    <div className=' flex items-center justify-between text-white py-5 md:py-8 lg:py-10'>

      <div className='flex items-center'>
        <button onClick = {toggleAsideHandler}> 
          <RiMenuFoldLine className='mr-3 w-[30px] h-[24px] lg:w-[34px] lg:h-[34px]' /> 
        </button>
        <div className='relative'>
          <div className='bg-primary absolute -left-2 w-3/4 h-full rounded-full -z-1'></div>
          <p className='relative z-10 text-xl lg:text-2xl'> {currentPage} </p>
        </div>
      </div>

      <div className='flex items-center'>
        <p className='mr-3'>Good Morning</p>
        <div className='relative'>
          <Button 
            onClick = {toggleLogoutHandler}
            className="flex items-center py-1 px-3 lg:py-2 lg:px-4" background color="white">
            <AiOutlineUser className='mr-1' />
            {/* { name } */}
            sdsds
            <IoChevronDown className='ml-1' />
          </Button>
          {
            isLogoutOpen && 
            <button 
            onClick = {logOut}
            className='absolute left-1/2 -translate-x-1/2 top-[110%] bg-white/30 px-3 py-1 rounded-lg hover:text-primary'> Logout </button>
          }
        </div>
      </div>

    </div>
  )
}

export default Navigation