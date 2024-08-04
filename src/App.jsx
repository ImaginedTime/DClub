import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from "./components/layout/index"
import Home from "./pages/Home/index"
import About from "./pages/About/index"
import Services from "./pages/Services/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>

      
      </Route>
    

    </Routes>
  )
}

export default App
