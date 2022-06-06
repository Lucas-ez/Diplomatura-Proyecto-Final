import { Link } from 'react-router-dom';
//import Header.css en la carpeta css/layout
import '../../css/layout/Header.css';


function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to = "/" className='link'>Home</Link></li>
                <li><Link to = "/asistentes" className='link'>Asistentes</Link></li>
                <li><Link to = "/smarthome" className='link'>Smart Home</Link></li>
                <li><Link to = "/smartclothes" className='link'>Smart Clothes</Link></li>
                <li><Link to = "/aboutus" className='link'>About us</Link></li>
            </ul>
        </nav>
    );
}

function Header() {
    return (
        <div>
            <Link to = "/" className='link logo'>Internet of Things</Link>
            <Nav />
        </div>
    );
}

export default Header;