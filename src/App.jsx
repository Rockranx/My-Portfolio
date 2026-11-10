import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import SchemaPage from "./Pages/Projects/SchemaPage";
import Error from "./Pages/Error";




function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/projects/:id" element={<SchemaPage/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
