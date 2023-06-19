import React from 'react'
import Login from './login'
import "./loginform.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'

const App = () => {

  return (
    <div >
   <Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
   </Router>
   {/* <Login/>
   <Dashbored/> */}
    </div>

  )
}

export default App