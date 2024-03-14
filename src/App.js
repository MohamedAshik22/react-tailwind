import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from "./Firstpage";
import Second from "./second";


export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/second" element={<Second />} />
    </Routes>
  </Router>
  )
 }  

 