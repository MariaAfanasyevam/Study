import { Link } from "react-router-dom";
import styles from '../Navbar/navbar.css'
import logo from '../../img/logo.png'

function Navbar( {title='To Do List'}){
    return (
<main>
    <header className="header">
    
    </header>
    <div className="navbar">
       
       <Link to='/'><img src={logo} alt='логотип' className='logo'></img>Главная  </Link>
       <Link to='/game'>Переводчик слов</Link>
    </div>
</main>
    )
};

export default Navbar;