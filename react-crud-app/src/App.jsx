
import './App.css'
import About from './component/About'
import Employee from './component/Employee'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppNavBar from './component/common/AppNavBar'
function App() {


  return (
    <>
      <BrowserRouter>
      <AppNavBar/>
      <Routes>
        <Route path='/' Component={Employee}/>
        <Route path='/about' Component={About}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
