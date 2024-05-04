import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'// {Homepage}
import Register from './components/Register'
import Login from './components/Login'
const App = () => {
  return (
   <>
    <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
    </Router>
   </>
  )
}

export default App