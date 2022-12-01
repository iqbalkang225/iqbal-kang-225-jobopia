// import { fetchUserData } from "./userSlice"

// import { getNotification } from '../../utils/utilFunctions'
// import { loadUser } from './userSlice'


// export const authUser = (user, authType) => {
//     return async (dispatch) => {
//       const { name, email, password } = user
  
//       try {
//         const res = await authType(auth, email, password)
//         getNotification('success', 'Welcome')

//         const { email:userEmail, uid: id } = res.user
        
//         const userRef = collection(db, 'users')
  
//         if(authType === createUserWithEmailAndPassword) {
//             setDoc( doc(userRef, userEmail), { 
//                 name, lastName: '', location: '', email: userEmail, id, jobs: [] 
//             })
//         }

//         onSnapshot(doc(userRef, userEmail), (snapshot) => {
//             dispatch(fetchUserData(snapshot.data()))
//         })
//         console.log('rendered')

//         onAuthStateChanged(auth, loggedInUser => {
//           dispatch(loadUser(loggedInUser.email))
//         })
        
//       } catch (err) {
//         console.log(err)
//         getNotification('error', err.message)
//       }
//     }
//   }

// const register
