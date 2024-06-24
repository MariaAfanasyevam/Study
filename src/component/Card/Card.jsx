import  styles from '../Card/card.css'
import Input from '../Input/Input';
import TextField from '../TextField/TextField';
function Card (props) {
    const {english, transcription, russian} = props;
    let actionItem;
  
   if (props.boolean === 'true') 
    
    {
        actionItem = <TextField english={english} transcription={transcription} russian={russian} />
    }
    else  
    {
        actionItem = <Input/>;

    }
     
 
       return (
 <div>

        {/* <section >
        <div className='row className1'> 
           <div className ="cell">{props.english}</div>
           <div className ="cell"> {props.transcription}</div>
            <div className ="cell"> {props.russian}</div>
            <div className ="cell">{props.boolean}</div>
            <button className= 'btn'></button>
       </div>
 
       </section> */}
    
    <TextField english={english} transcription={transcription} russian={russian} />
    </div>
    );
}
export default Card