import styles from "./translator.css"
import React, {useState} from "react";
import data from "../../data/words.json"
let index;
 index= Math.floor(Math.random() * Object.keys(data).length);

 const Translator = ({words}) => {
 const { id, english, russian, transcription} = words;
 const [isSelected, setIsSelected] = useState (true);
 

    return (
        <container className= 'containerCard'>
    <div >
             {
    isSelected ? (
      <div className="translatorCard">
      <p>{words[index].english}</p> 
      <p>{words[index].transcription}</p>
      <button className='btnCheck' onClick= {() => setIsSelected(false)}> Проверить</button>
      </div>
     
         
   
         ) : (
    <div  className="translatorCard" /*/onClick={() => setIsSelected(true)}*/>
        <p>{words[index].english}</p> 
        <p>{words[index].transcription}</p>
         <p>{words[index].russian}</p>
            </div> )}
            </div>
            </container>
  )}
  export default Translator
