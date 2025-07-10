import '../css/AboutUs.css';
import Header from "./Header";
import Footer from "./Footer";
import Services from './Home/Services';

function AboutUs() {
    return ( 
        <>
            <Header/>
            <section className="about">
                <div className="about-title">
                    <h1>About <span>Us</span></h1>
                </div>
                <div className="about-container">
                    <img src="/images/about1.jpg" alt="" />
                    <div className="about-content">
                        <div>
                            <h1>Who <span>We Are?</span></h1>
                            <p>We are a passionate team of travel enthusiasts dedicated to inspiring and guiding you on your next adventure. With years of experience and a deep love for exploring the world, we strive to provide personalized travel experiences that connect you with the culture, nature, and people of every destination.</p>
                        </div>
                        <div>
                            <h1>Our <span>Mission</span></h1>
                            <p>Our mission is to make travel accessible, enjoyable, and meaningful for everyone. We are committed to delivering authentic experiences that connect travelers with local cultures and environments while promoting sustainable and responsible tourism. Your adventure is our priority.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Services/>
            <Footer/>
        </>
     );
}

export default AboutUs;