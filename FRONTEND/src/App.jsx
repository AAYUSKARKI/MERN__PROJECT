import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'// {Homepage}
import Register from './components/Register'
import Login from './components/Login'
import Createblog from './components/Createblog'
import CombinedBlogcards from './components/CombinedBlogcards'
import Updateblog from './components/Updatecards'
import Mainpage from './components/Mainpage'
import Blogdetail from './components/Blogdetail'
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
          <Route path='/updateblog/:id' element={<Updateblog />}/>
          <Route path='/mainpage' element={<Mainpage />}/>
          <Route path='/blogdetail/:id' element={<Blogdetail />}/>
        </Routes>
    </Router>
   </>
  )
}

export default App