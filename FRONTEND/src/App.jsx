import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import io from 'socket.io-client'
import Homepage from './pages/Homepage'// {Homepage}
import Register from './components/Register'
import Login from './components/Login'
import Createblog from './components/Createblog'
import CombinedBlogcards from './components/CombinedBlogcards'
import Updateblog from './components/Updatecards'
const App = () => {

  const socket = io('http://localhost:7000')

  socket.on('connect', () => {
    console.log('connected')
  })

  
  return (
   <>
    <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/createblog' element={<Createblog />}/>
          <Route path='/getallblogs' element={<CombinedBlogcards />}/>
          <Route path='/updateblog/:id' element={<Updateblog />}/>
        </Routes>
    </Router>
   </>
  )
}

export default App