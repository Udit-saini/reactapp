
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import Alert from './components/Alert';
{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
*/}




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
      document.title = 'TextUtils Dark';


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode Disabled')
      document.title = 'TextUtils Light';
    }
  }
  return (
    <>
     <NavBar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
        <Textform heading="Enter Your Text" mode={mode} showAlert={showAlert} />
        </div>
      {/*<Router>
       
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">

            </Route>
  </Switch>*/}
        

    
    </>
  );
}

export default App;
