import React from 'react'
import "./App.css"
import "./styles/Global.css"
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='App'>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>

      </div>
    </div>
  )
}

export default App