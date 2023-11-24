import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "warning");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert}/>
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
        </div>
    {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
        <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
    </Router> */}
    </> 
  );
}

export default App;