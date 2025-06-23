import { useState } from 'react';
import '../css/Header.css';



function Header() {

    const [isMenuOpen , setIsMenuOpen] = useState(false)

    function toggleMenu () {
        setIsMenuOpen(!isMenuOpen);
    }

    return ( 
        <header>
            <div>
                <img src="/images/logo.png" alt=""/>
                < i className='bx  bx-menu' onClick={toggleMenu}></i> 

            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tours</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
            </ul>

        </header>
     );
}

export default Header;