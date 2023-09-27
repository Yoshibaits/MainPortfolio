import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Firstpart from './Components/Firstpart'
import Intro from './Components/Intro'
import Awards from './Components/Awards'
import Divider from './Components/Divider'
import Footer from './Components/Footer'
import Workexp from './Components/Workexp'
import Projects from './Components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
      <Firstpart />
      <Intro />
      <Divider />
      <Awards/>
      <Divider />
      <Workexp/>
      <Divider />
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
