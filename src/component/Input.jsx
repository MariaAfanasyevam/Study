import styles from "../component/input.css"
function Input() {
    return (
        <section >
        <div className='row'> 
        <div className ="cell"> <input class="inputText" type="text" value='english'></input></div>
        <div className ="cell">  <input class="inputText" type="text" value='transcription'></input></div>
        <div className ="cell"> <input class="inputText" type="text" value='russian'></input></div>
        <div className ="cell"> <input class="inputText" type="text" value='boolean'></input></div>
        <div className ="cell"> <button className= 'btn_save'> Save</button><button className= 'btn'></button></div>
       </div>
       </section>
    );
}
export default Input