import '../../src/css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer>
            <div>
                <img src="/images/logo.png" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fugit sequi consectetur nisi ratione laborum recusandae, exercitationem aut tempora voluptas officiis ea eaque suscipit dolores quibusdam reiciendis! Consectetur, nostrum officiis?</p>
                <div className="social">
                    <i className="bx bxl-youtube" ></i>
                    <i className="bx bxl-facebook" ></i>
                    <i className="bx bxl-instagram" ></i>
                </div>
            </div>
            <div className="links">
                <h2>Discover</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/tours">Tours</Link></li>
                </ul>
            </div>
            <div className="links">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            <div className="contact">
                <h2>Contact</h2>
                <ul>
                    <li><i className='bx bxs-map'></i><span> Address : </span>Lorem </li>
                    <li><i className='bx  bx-envelope'  ></i> <span> Email : </span>xyz@email.com</li>
                    <li><i className='bx  bx-phone'  ></i> <span> Phone : </span>09000000000</li>
                </ul>
            </div>
        </footer>
     );
}

export default Footer;