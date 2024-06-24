import React, { useState} from "react";
import Input from "../Input/Input";
function TextField (rowData) {
   
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
          return { ...prevValue, [event.target.name]: event.target.value };
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
    
    
      function handleEdit() {
        setIsSelected(!isSelected);
      }
    

return  isSelected ? (
    <section >
        <div className='row'> 
        <div className ="cell"> <input class="inputText" type="text"  value={value.english} name={'english'} onChange={handleChange}></input></div>
         <div className ="cell"> <input class="inputText" type="text" value={value.russian} name={'russian'} onChange={handleChange}></input></div>
         <div className ="cell">  <input class="inputText" type="text"value={value.transcription} name={'transcription'} onChange={handleChange}></input></div>
        <div className ="cell"> <button className= 'btn_save' onClick={handleSave}> Save</button><button className= 'btn' onClick={handleClose}>Close</button></div>
       </div>
     </section>
):(
<section >
<div className='row'> 
   <div className ="cell">{value.english}</div>
       <div className ="cell"> {value.russian}</div>
       <div className ="cell"> {value.transcription}</div>

    <div className ="cell"><button className= 'btn' onClick={handleEdit}>Edit</button></div>
</div>
</section>
);
}
export default TextField