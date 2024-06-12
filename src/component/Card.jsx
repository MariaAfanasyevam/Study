import  styles from '../component/card.css'
import Input from './Input';
import TextField from './TextField';
function Card (props) {
    const {english, transcription, russian,tags, boolean } = props;
    let actionItem;
   if (props.boolean === 'true') 
    
    {
        actionItem = <TextField english={english} transcription={transcription} russian={russian} tags={tags} boolean={boolean}/>
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
    
          {actionItem}   
    </div>
    );
}
export default Card