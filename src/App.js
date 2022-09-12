// semantic-ui CDN in index.html
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

const App = () => {

    

    return (
        <>
           <Router>
                <NavBar />
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/home" element={<Home/>}/>
                </Routes>
                <Footer />

            </Router>
      </>
    );
}

export default App;