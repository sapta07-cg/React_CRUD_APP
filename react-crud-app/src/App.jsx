
import './App.css'
import About from './component/About'
import Employee from './component/Employee'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppNavBar from './component/common/AppNavBar'
import CreateEmployee from './component/CreateEmployee'
function App() {


  return (
    <>
      <BrowserRouter>
      <AppNavBar/>
      <Routes>
        <Route path='/' Component={Employee}/>
        <Route path='/about' Component={About}/>
        <Route path='/createEmp' Component={CreateEmployee}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
