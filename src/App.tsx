import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

let navArr: string[] = ['Home', 'About'];
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#172a46';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#172a46';
      document.body.style.color = 'white';
    }
  }
  return (
    <>
      <Navbar title='Textutils' nav={navArr} mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <TextForm mode={mode} />
      <About mode={mode} />
    </>
  );
}

export default App;
