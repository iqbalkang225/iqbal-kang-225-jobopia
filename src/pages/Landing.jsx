import React from 'react'
import svg from '../assets/image.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {

  // const sendData = () => {
  //   setDoc(doc(db, 'users', 'name'), {age: 12})
  // }


  return (
    <main>
      <div className=' w-screen md:grid grid-cols-2'>
        {/* left side col */}
        <div className='bg-black text-white h-screen relative'>
          <Logo />
          <div className=' p-8 xl:px-32 absolute top-[50%] translate-y-[-50%]'>
            <h1 className='text-5xl'>
              Job <span className='text-primary'>Tracking</span> App
            </h1>
            <p className='my-6 max-w-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              veritatis vero eligendi blanditiis iusto atque quae omnis
              accusantium sit amet consectetur adipisicing elit. Optio,
              veritatis quam libero.
            </p>
            <Link
              to='/register'
              className='bg-gradient-to-r from-primary to-red py-2.5 px-5 rounded-lg capitalize hover:bg-gradient-to-l from-primary to-red'
            >
              login / register
            </Link>
            {/* Delete this */}
            <div>
              <input type="text"  />
              {/* <button onClick={sendData}>Send data</button> */}
            </div>
          </div>
        </div>

        {/* right side col */}
        <div className='hidden md:flex items-center justify-center'>
          <img className='h-72' src={svg} alt='svg image' />
        </div>
      </div>
    </main>
  )
}

export default Landing
