
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <div className='md:w-11/12 mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
