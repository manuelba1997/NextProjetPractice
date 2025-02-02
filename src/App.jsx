/*import { useState } from 'react'*/
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Greeting from './components/Greeting'
import Footer from './components/Footer'
import "./styles/styles.css"

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <main>
      <h1 className='main-heading'>Hello React</h1>
      <p>Wellcome to my first React APP</p>
      <Greeting name='Manuel' />
      <Footer />
    </main>
  )
}

export default App
