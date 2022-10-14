import { Route, Routes } from 'react-router'
import './App.css'
import { Dashboard, Error, Register } from './pages'
import Landing from './pages/Landing'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Provider>
  )
}

export default App
