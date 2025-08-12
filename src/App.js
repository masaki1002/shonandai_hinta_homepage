import React from "react"

import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import MorePosts from "./components/MorePosts";

function App() {
  return (
    <Router>
    
       <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/#" element={ <Home /> }></Route>
        <Route path="/moreposts" element={ <MorePosts/> }></Route>
       </Routes>
    </Router>
  );
}

export default App;
