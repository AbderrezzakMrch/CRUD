import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users.jsx";
import CreateUsers from './CreateUsers.jsx'
import UpdateUsers from './UpdateUsers.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUsers/>}></Route>
        <Route path='/update/:id' element={<UpdateUsers/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
