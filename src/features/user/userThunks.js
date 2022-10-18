import { fetchUserData } from "./userSlice"

import { auth, db } from '../../firebase'
import { getNotification } from '../../utils/utilFunctions'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'


export const authUser = (user, authType) => {
    return async (dispatch) => {
      const { name, email, password } = user
  
      try {
        const res = await authType(auth, email, password)
        getNotification('success', 'Welcome')

        const { email:userEmail, uid: id } = res.user
        
        const userRef = collection(db, 'users')
  
        if(authType === createUserWithEmailAndPassword) {
            setDoc( doc(userRef, userEmail), { 
                name, lastName: '', location: '', email: userEmail, id, jobs: [] 
            })
        }

        onSnapshot(doc(userRef, userEmail), (snapshot) => {
            dispatch(fetchUserData(snapshot.data()))
        })
        
      } catch (err) {
        console.log(err)
        getNotification('error', err.message)
      }
    }
  }
