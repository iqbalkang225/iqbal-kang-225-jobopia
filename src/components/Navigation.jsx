import React from 'react'
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { IoChevronDown } from 'react-icons/io5'
import { Button } from '../components'

const Navigation = () => {
  return (
    <div className=' flex items-center justify-between text-white py-5 md:py-8 lg:py-10'>

      <div className='flex items-center'>
        <button> <RiMenuFoldLine className='mr-3 w-[30px] h-[24px] lg:w-[34px] lg:h-[34px]' /> </button>
        <div className='relative'>
          <div className='bg-primary absolute -left-2 w-3/4 h-full rounded-full -z-1'></div>
          <p className='relative z-10 text-xl lg:text-2xl'>Dashboard</p>
        </div>
      </div>

      <div className='flex items-center'>
        <p className='mr-3'>Good Morning</p>
        <Button className="flex items-center py-1 px-3 lg:py-2 lg:px-4" background color="white">
          <AiOutlineUser className='mr-1' />
          Bala
          <IoChevronDown className='ml-1' />
        </Button>
      </div>

    </div>
  )
}

export default Navigation