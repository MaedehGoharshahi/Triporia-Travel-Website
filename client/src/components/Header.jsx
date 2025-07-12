import { useState } from 'react';
import '../css/Header.css';
import { Link , useLocation , useNavigate } from 'react-router-dom';




function Header() {

    const location = useLocation();

    const navigate = useNavigate();

    const [isMenuOpen , setIsMenuOpen] = useState(false)

    function toggleMenu () {
        setIsMenuOpen(!isMenuOpen);
    }

    return ( 
        <header>
            <div>
                <img src="/images/logo.png" alt=""onClick={() => navigate('/')}/>
                < i className='bx  bx-menu' onClick={toggleMenu}></i> 
            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
                <li><Link to="/" className={location.pathname === '/' ? 'active-link' : '' }>Home</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active-link' : '' }>About</Link></li>
                <li><Link to="/tours" className={location.pathname === '/tours' ? 'active-link' : '' }>Tours</Link></li>
                <li><Link to="/login" className={location.pathname === '/login' ? 'active-link' : '' }>Login</Link></li>
                <li><Link to="/register" className={location.pathname === '/register' ? 'active-link' : '' }>Register</Link></li>
            </ul>

        </header>
     );
}

export default Header;