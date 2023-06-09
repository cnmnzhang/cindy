import React from 'react'
import "./App.css"
import "./styles/Global.css"
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className='App'>App
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>

      </div>
    </div>
  )
}

export default App