import React, { useState } from 'react'
import Alert from './Component/Alert'

import Navbar from './Component/Navbar'
import TextForm from './Component/TextForm'
// commented for deploying on github
//  import {
//    BrowserRouter as Router,
//   Routes,
//   Route
//   } from "react-router-dom";
// import About from './Component/About';

const App = () => {

  const [mode, setMode] = useState('light') // whther dark mode enabled or not
  const [alert , setAlert] = useState(null)

const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor ="#181D31"
    document.body.style.color ="white"
    showAlert("Dark Mode Enabled", "success")
  }else{
    setMode('light')
    document.body.style.backgroundColor ="white"
    document.body.style.color ="black"
    showAlert("Dark Light Enabled", "success")

  }
}


  return (
    <div>
      
      {/* <Router>
      <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={ <TextForm mode={mode} showAlert ={showAlert}/>}/>
          <Route exact path="/about" mode={mode} showAlert ={showAlert} element={ <About/>}/>
        </Routes>
      </Router>
       */}
       <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>
       <TextForm mode={mode} showAlert ={showAlert}/>
    </div>
  )
}

export default App
