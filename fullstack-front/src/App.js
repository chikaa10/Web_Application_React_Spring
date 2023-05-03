
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './Users/AddUser';

function App() {
  return (
    <div className="App">

<div id="app"/>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home />} /> 
        <Route exact path ="/adduser" element={<AddUser />} />     
        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
