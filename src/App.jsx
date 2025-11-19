import { useState } from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import './App.css'
import AllProducts from './pages/AllProducts'
import Store from './pages/Store'
import Layout from './Layouts/Layout'
import CurlyHair from './pages/CurlyHair'
import Suncream from './pages/Suncream'
import TanningCream from './pages/TanningCream'
import Facewash from './pages/FaceWash'
import AcneCream from './pages/AcneProne'
import Cicacream from './pages/CicaCream'
import Login from './pages/Login'
import Checkout from './pages/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='store' element={<Store/>} />
            <Route path='allproduct' element={<AllProducts/>} />
            <Route path='curly-hair' element={<CurlyHair/>} />
            <Route path='suncream' element={<Suncream/>} />
            <Route path='tanning-cream' element={<TanningCream/>} />
            <Route path='face-wash' element={<Facewash/>} />
            <Route path='acnecream' element={<AcneCream/>} />
            <Route path='cicacream' element={<Cicacream/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='login' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
