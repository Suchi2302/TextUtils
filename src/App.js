
import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been Enabled', 'success')
      document.title='Text Utils - Dark mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been Enabled', 'success')
      document.title='Text Utils - Light mode'
    }
  }
  return (
   <>
     {/* <NavBar title="TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
      <TextForm  showAlert={showAlert} heading='Enter the text to analyse below' mode={mode}/>
      {/* <About/>
     </div> */}
    <BrowserRouter>
      <NavBar title="Navbar" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="about" element={<About />}>
          </Route>
          <Route path="/" element = {<TextForm  heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
   </>
  );
}

export default App;
