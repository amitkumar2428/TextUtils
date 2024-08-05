import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert2';
//import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/



function App() {
  const [mode, setMode] = useState('light');
  const [switchText, setSwitchText] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setSwitchText('Enable light mode');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode enabled', 'success');

      /* setInterval(()=>{
         document.title='TextModify is an amazing app';
       },2000)
 
       setInterval(()=>{
         document.title='Install TextModify now';
       },1500)*/

    }
    else {
      setMode('light');
      setSwitchText('Enable dark mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');

    }
  }
  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextModify" homeText='Home' aboutText="About Us" mode={mode} toggleMode={toggleMode}
          switchText={switchText} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/*<Routes>*/}
            {/*<Route exact path="/about" element={<About/>}/>*/}
            {/*</div><Route exact path="/" element={<TextForm showAlert={showAlert} heading="Write something to analyse" mode={mode} />}/>*/}
            <TextForm showAlert={showAlert} heading="Write something to analyse" mode={mode} />
              
          {/*</></Routes>*/}
        </div>
      {/*</Router>*/}

    </>
  );

}

export default App;
