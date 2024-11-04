import { useState } from 'react'
import './App.css'
import NavMenu from './components/NavMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">

      <NavMenu />
      <MainContent />
    </div>
    </>
  )
}

export default App
