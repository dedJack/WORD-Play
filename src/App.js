import "./App.css";
import Navbar from './components/Navbar';
import TextForm from "./components/Textform";
import React, { useState } from 'react';
import Alert from "./components/Alerts";
import Blog from "./components/Blog";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message ,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#253338';
      // showAlert("Dark mode have been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'beige';
      // showAlert("Light mode have been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title = "WORDPlay" mode = {mode} toggleMode = {toggleMode}/> 
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* Route for About component  */}
            <Route path="/blog" element={<Blog description = " Word Play: Your Ultimate Text Transformation and Analysis Tool"  mode = {mode}/>} />
          	{/* <Blog description = " Word Play: Your Ultimate Text Transformation and Analysis Tool"  mode = {mode}/> */}

            {/*Route for TextForm component*/}
            <Route path="/" element={<TextForm heading = " Enter Text To Analyze" mode = {mode} showAlert = {showAlert}/>} />
          	{/* <TextForm heading = " Enter Text To Analyze" mode = {mode} showAlert = {showAlert}/> */}
          
          </Routes>
        </div> 
      </Router>
    </>
  );
}

export default App;
