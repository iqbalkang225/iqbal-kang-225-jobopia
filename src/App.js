import { Route, Routes } from 'react-router'
import './App.css'
import { Home, Error, Register, Landing, Dashboard, AddJob, Profile } from './pages'
// import Landing from './pages/Landing'
import { Provider } from 'react-redux'
import store from './store/store'
import SearchJobs from './pages/SearchJobs'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={ <Dashboard />} />
          <Route path='add' element={ <AddJob />} />
          <Route path='profile' element={ <Profile />} />
          <Route path='search' element={ <SearchJobs />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Provider>
  )
}

export default App
