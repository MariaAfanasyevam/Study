import React from 'react';
import Header from './component/Header/Header';
import Footer from "./component/Footer/Footer";
import Card from "./component/Card/Card";
import data from "./data/words.json";
import Translator from './component/Translator/Translator';
import Main from './component/Main/Main';
import Missing from './component/Missing/Missing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';

function App() {

  return (
    <Router>
<div>
   
  <Header/>
  <Navbar/>
  <Routes>
  <Route path='/' element = {<Translator words={data}/>}/>
  <Route path='/game' element = {<Main/>}/>
   <Route path='*' element ={<Missing/>}/>
  </Routes>

     <Footer/>
    </div>
    </Router>
  );
}

export default App;
