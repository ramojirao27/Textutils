
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [mode,setMode] =useState('light');
  const changeMode =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#032744"; 
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
          <Navbar title="TextUtils" mode={mode} changeMode={changeMode} />
          <div className="container">
          <Textform title="Enter the text to analyze" mode={mode}/>
          {/* <About /> */}
          </div>
          
    </>

    
    
  );
}

export default App;
