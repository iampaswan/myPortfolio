import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header'
import MainSection from './Components/MainSection'
import Footer from './Components/Footer'
import About from './Components/About'
import Blog from './Components/Blog'
import Project from './Components/Project'
import Photos from './Components/Photos'


function App() {
  const [count, setCount] = useState(0)

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Header>

      {selectedTab === "Home" && <MainSection />}
      {selectedTab === "About" && <About />}
      {selectedTab === "Blog" && <Blog />}
      {selectedTab === "Project" && <Project />}
      {selectedTab === "Photos" && <Photos />}

      <Footer></Footer>

    </>
  )
}
// 
export default App





