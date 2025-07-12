import '../../css/Home/Introduction.css';
import { useNavigate } from 'react-router-dom';

function Introduction() {
    const navigate = useNavigate();
    return ( 
        <section className="introduction">
            <img src="/images/IMG_5113.JPG" alt="" />
            <div className="content">
                <p className="title">About ___</p>
                <h1>With Our All Experience We Will Serve you</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum! Nihil magni praesentium ullam, nisi voluptates impedit sint doloribus quisquam? Corporis, excepturi quidem? Enim nostrum recusandae cumque quibusdam voluptatum porro.</p>
                <button onClick={() => navigate('/about')}>Learn More</button>
                <div className="options">
                    <div>
                        <h3>200+</h3>
                        <p>Customer & Partners</p>
                    </div>
                    <div>
                        <h3>500+</h3>
                        <p>Places in The World</p>
                    </div>
                    <div>
                        <h3>1k+</h3>
                        <p>Success Journey</p>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Introduction;