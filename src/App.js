import React from "react";
import Pmanager from './Pmanager';
import Description from './Description';
import Nav from './Nav';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to ="/Pokemon"/>}/>
            <Route path="/Pokemon" element={<Pmanager/>}></Route>
            <Route path="/Pokemon/:name" element={<Description/>}></Route>
          </Routes>
        </BrowserRouter> 
      </React.StrictMode>
    </div>
  );
}

export default App;
