import '../../css/Home/Services.css'


function Services() {
    return ( 
        <section className="services">
            <div className="content">
                <p className="title">What We Give ___</p>
                <h1>We Offer Our Best <span>Services.</span></h1>
            </div>
                <div className='items'>
                    <i className='bx bxs-map'></i>
                    <h2>Customized Tour Packages</h2>
                    <p>We create tailor-made travel experiences that suit your interests, budget, and schedule — whether you’re seeking adventure, relaxation, or cultural discovery.</p>
                </div>
                <div className='items'>
                    <i className='bx bxs-bus'></i>
                    <h2>Comfortable Transportation</h2>
                    <p>Enjoy safe and convenient travel with our modern fleet and professional drivers, ensuring a smooth journey from start to finish.</p>
                </div>
                <div className='items'>
                    <i className='bx bxs-hotel'></i>
                    <h2>Premium Accommodation</h2>
                    <p>Stay at hand-picked hotels and resorts that combine comfort, quality, and local charm to make your trip unforgettable.</p>
                </div>
        </section>
     );
}

export default Services;