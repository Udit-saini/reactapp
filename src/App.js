
import { useState } from 'react';
import './App.css';
import About from './about';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#666e77';
      showAlert('Dark Mode Enabled');


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode Disabled')
    }
  }
  return (
    <>
      <Router>
        <NavBar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Switch>
            <Route path="/About">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <Textform heading="Enter Your Text" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>

      </Router>
    </>
  );
}

export default App;
