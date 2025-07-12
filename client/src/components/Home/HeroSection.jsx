import '../../css/Home/HeroSection.css';
import {  useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();
    return ( 
        <section className="hero">
            <div className="pictures">
                <img src="/images/hero1.JPG" alt="" className='item1'/>
                <img src="/images/hero2.JPG" alt="" className='item2'/>
                <img src="/images/hero3.JPG" alt="" className='item3'/>
                <img src="/images/hero4.JPG" alt="" className='item4'/>
            </div>
            <div className="content">
                <p className="title">✈️ Explore the World ___</p>
                <h1>Make Memories Around the World with Unforgettable <span>Adventures.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, placeat quibusdam! Necessitatibus consequuntur, dolorum voluptatibus reprehenderit, nisi fuga doloribus nobis voluptatem expedita nesciunt aut molestiae rerum culpa sed quibusdam odio.</p>
                <button onClick={() => navigate('/tours')}>Get Started</button>
            </div>
        </section>
     );
}

export default HeroSection;