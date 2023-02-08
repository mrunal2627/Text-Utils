import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//  Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor ="#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "text Utils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="#f8f9fa";
      showAlert("Light mode has been enabled", "success");
      document.title = "text Utils - Light Mode"
    }
  };
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar
        title="Word Converter"
        aboutText="About "
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      {/* <Routes>
          <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode ={mode} />
          {/* </Route>
        </Routes> */}
        
       
        
      </div>
      {/* </BrowserRouter> */}
    </>
  );
  // return (
  //   <><BrowserRouter >
  //   <Navbar title="Word Converter" mode={mode} toggleMode={toggleMode} />
  //   <Alert alert={alert}></Alert>
  //   <div className="container my-3"></div>
  //     <Routes>
  //       <Route  exact path="/About" element={<About aboutus="About Us" />}></Route>
  //       <Route exact  path="/" element={<TextForm formlabel="Enter Your Text" mode={mode} />}></Route>
  //     </Routes>
  //   </BrowserRouter></>
  // );
 
}

export default App;
