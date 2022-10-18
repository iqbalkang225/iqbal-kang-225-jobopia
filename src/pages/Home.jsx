import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Aside, Navigation } from '../components'

import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { fetchUserData, loadUser } from '../features/user/userSlice'

const Home = () => {

  const dispatch = useDispatch()

  onAuthStateChanged(auth, loggedInUser => {
    dispatch(loadUser(loggedInUser.email))
  })

  const { anyUser } = useSelector(store => store.user)
  console.log(anyUser)

  // // //change
  useEffect(() => {
      const userRef = collection(db, 'users')
      onSnapshot(doc(userRef, anyUser), (snapshot) => {
          dispatch(fetchUserData(snapshot.data()))
      })
  }, [])

  const {isAsideOpen} = useSelector(store => store.ui)

  return (
    <main className='relative lg:grid grid-cols-10'>

      {/* Backdrop */}
      <div className='absolute bg-black h-screen w-screen lg:hidden'></div>

      <Aside />

      <div className={`h-screen px-5 lg:col-span-8 bg-black md:px-16 lg:px-24 overflow-scroll ${!isAsideOpen && 'lg:col-span-10'}`}>
        <Navigation/>
        <Outlet/>
      </div>
     
    </main>
  )
}

export default Home
