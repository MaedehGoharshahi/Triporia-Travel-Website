import '../../css/Home/HeroSection.css'

function HeroSection() {
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
                <h1>Make memories around the world with unforgettable <span>adventures.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, placeat quibusdam! Necessitatibus consequuntur, dolorum voluptatibus reprehenderit, nisi fuga doloribus nobis voluptatem expedita nesciunt aut molestiae rerum culpa sed quibusdam odio.</p>
            </div>
        </section>
     );
}

export default HeroSection;