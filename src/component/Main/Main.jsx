import React from "react";
import Card from "../Card/Card";
import data from '../../data/words.json'
function Main () {
   
return (
   <div>
        <h1> 
        Карточки слов
    </h1>
    <section>
      <h2>
        <div className='row'> 
        <div className ="cell"> Слово на английском</div>
 
        <div className ="cell"> Слово на русском </div> 
         <div className ="cell"> Транскрипция</div> 
        <div className ="cell"></div>
        </div>
      </h2>
      
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
   </section>
    </div>
);
}
export default Main