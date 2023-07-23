import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    // it would remove the alert after 3ms , it takes call back &  time 
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#052c65';
      showAlert("Dark Enabled", "Success")
      document.title = " Text Utils- dark mode";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "Success")
      document.title = " Text Utils- light mode";
    }
  }

  return (
    <Router>
      <div>
        <Navbar title="Akash Dubey" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>

            <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
