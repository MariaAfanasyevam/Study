function TextField (props) {
    const {english, transcription, russian, boolean } = props;
return (
<section >
<div className='row'> 
   <div className ="cell">{props.english}</div>
   <div className ="cell"> {props.transcription}</div>
    <div className ="cell"> {props.russian}</div>
    <div className ="cell">{props.boolean}</div>
    <div className ="cell"><button className= 'btn'></button></div>
</div>
</section>
);
}
export default TextField