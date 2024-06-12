import Header from './component/Header';
import Footer from "./component/Footer";
import Card from "./component/Card";
import data from "./data/words.json"
import React from 'react';
import './App.css';

function App() {
  return (
<div>
   
  <Header/>
 
  <h1> Карточки слов</h1>
  <section>
    <h2>
                 <div className='row'> 
      <div className ="cell"> Слово на английском</div>
      <div className ="cell"> Транскрипция</div> 
      <div className ="cell"> Слово на русском </div> 
      <div className ="cell">Тэги</div>
      <div className ="cell"></div>
      </div>
      </h2>
 </section>
  <React.Fragment>
      {data.map((i) => (
        <Card
          key={i.id}
          english={i.english}
          transcription={i.transcription}
          russian={i.russian}
          tags={i.tags}
          boolean={i.boolean}
        />
      ))}
    </React.Fragment>
     <Footer/>
    </div>
  );
}

export default App;
