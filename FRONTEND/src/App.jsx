import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'// {Homepage}
import Register from './components/Register'
import Login from './components/Login'
import Createblog from './components/Createblog'
import CombinedBlogcards from './components/CombinedBlogcards'
const App = () => {
  return (
   <>
    <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/createblog' element={<Createblog />}/>
          <Route path='/getallblogs' element={<CombinedBlogcards />}/>
        </Routes>
    </Router>
   </>
  )
}

export default App