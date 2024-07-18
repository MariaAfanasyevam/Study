import styles from "./translator.css"
import React, {useState, useEffect} from "react";
import data from "../../data/words.json"
let index;
 index= Math.floor(Math.random() * Object.keys(data).length);
let length=Object.keys(data).length;
 const Translator = ({words} )=> {
 const { id, english, russian, transcription} = words;
 const [isSelected, setIsSelected] = useState (true);
 const [count, setCount] = useState (0);
const [countCard, setNumber] = useState(0);
 useEffect (() => {
    document.title = `Count: ${count}`;
    
 }, [count]);

 function increaseCount () {
   
    (count === (length-1)) ?  setCount (count) :  setCount (count+1);
    setIsSelected(true);
      
 }

 const decreaseCount = () => {
    (count === 0) ?  setCount (0) :  setCount (count-1);
    setIsSelected(true);

 };

 function increaseNumber() {
 setNumber (countCard+1);
 setIsSelected(false);
}
 
 index = count;
    return (
        <div>
         <h1>Главная</h1>
        <section className= 'containerCard'>
            <div><button onClick = {decreaseCount}>-</button></div>
    <div >
    
             {
    isSelected ? (
      <div className="translatorCard">
      <p>{words[index].english}</p> 
      <p>{words[index].transcription}</p>
      <button className= {styles.btnCheck} onClick = {increaseNumber} > Проверить</button>
      </div>
       
         ) : (
    <div  className="translatorCard" >
        <p>{words[index].english}</p> 
        <p>{words[index].transcription}</p>
         <p>{words[index].russian}</p>
            </div> )}
            </div>
             <div><button onClick= {increaseCount}>+</button></div> 
             </section>
             <section class='count'>  {count+1}/{length}</section> 
             <section class='count'>  <p>Изучено {countCard} карточек</p></section>
            </div>   
            
  )

}
  export default Translator
