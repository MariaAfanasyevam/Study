import React, { useState} from "react";
import styles from "./input.css"

function Input(rowData) {
    const { id, english, russian, transcription } = rowData;
    const [isSelected, setIsSelected] = useState(false);
   
  const [value, setValue] = useState({
        id:id,
        english:english,
        russian:russian,
        transcription:transcription,
      });
    function handleChange(event) {
        setValue((prevValue) => {
          return { ...prevValue, [event.target.english]: event.target.russian };
        });
      }

              
    function handleClose() {
        setIsSelected(!isSelected);
        setValue({ ...rowData });
      }
      function handleSave() {
        setValue({...value});
        setIsSelected(!isSelected);
      }
    
    
    return (
        <section >
        <div className='row'> 
        <div className ="cell"> <input class="inputText" type="text"  value={value.english} name={'english'} onChange={handleChange}></input></div>
         <div className ="cell"> <input class="inputText" type="text" value={value.russian} name={'russian'} onChange={handleChange}></input></div>
         <div className ="cell">  <input class="inputText" type="text"value={value.transciprion} name={'transcription'} onChange={handleChange}></input></div>
        <div className ="cell"> <button className= 'btn_save' onClick={handleSave}> Save</button><button className= 'btn' onClick={handleClose}>Close</button></div>
       </div>
       </section>
    );
}
export default Input