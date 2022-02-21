import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Matter-Light/style.css";
import Header from "./component/Header";
import SignIn from "./component/SignIn (1)";
import Landing from "./component/Landing";
import SignUp from "./component/signUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhyPage from "./component/WhyPage";
import Footer from "./component/Footer";

const App = () =>{
  return(
    <>
    <Router>
        <div className="App">
          <Header />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Landing/>}/>
            {/* <Route path="/landingpage" element={<Landing/>}/> */}
            <Route path="/register" element={<SignUp/>}/>
          </Routes>
        </header>
        <Landing/>
        <WhyPage/>
        <Footer/>
      </div>
    </Router>
  </>
  )
};

export default App;