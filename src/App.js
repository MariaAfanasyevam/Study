import React from 'react';
import Header from './component/Header/Header';
import Footer from "./component/Footer/Footer";
import Card from "./component/Card/Card";
import data from "./data/words.json";
import Translator from './component/Translator/Translator';
import Main from './component/Main/Main';
import './App.css';


function App() {

  return (
<div>
   
  <Header/>
  <Translator words={data}/>
  <Main/>

  <React.Fragment>
      {data.map((i) => (
        <Card
          key={i.id}
          english={i.english}
         russian={i.russian}
           transcription={i.transcription}
        />
      ))}
    </React.Fragment>
     <Footer/>
    </div>
  );
}

export default App;
