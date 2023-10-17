import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

let navArr: string[] = ['Home', 'About'];
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'dark') {
      showAlert('Dark mode disabled');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#172a46';
    } else {
      showAlert('Dark mode enabled');
      setMode('dark');
      document.body.style.backgroundColor = '#172a46';
      document.body.style.color = 'white';
    }
  }
  const showAlert = (msg: string) => {
    setAlert(msg);
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title='Textutils' nav={navArr} mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}

      <Alert alert={alert}></Alert>
      <TextForm mode={mode} alert={alert} showAlert={showAlert} />
      {/* <Routes>
          <Route path="/" element={<TextForm mode={mode} alert={alert} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
