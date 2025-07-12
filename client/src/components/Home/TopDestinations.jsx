import '../../css/Home/TopDestinations.css'
import { useNavigate } from 'react-router-dom';

function TopDestinations() {

    const navigate = useNavigate();

    const handleClick = (location) => {
        navigate('/tours' , {state : {location}})
    }

    return ( 
        <section className="top-destionation">
            <div className="content">
                <p className="title">Top Destinations ___</p>
                <h1><span>Explore</span> the Best Places to Visit - From Iconic Cities to Hidden Gems</h1>
            </div>
            <div className="pictures">
                <div className='item1'>
                    <img src="/images/IMG_5116.JPG" alt="Switzerland" onClick={() => handleClick('Switzerland')}/>
                    <h2>Switzerland</h2>
                </div>
                <div className='item2'>
                    <img src="/images/IMG_5109.JPG" alt="Greece" onClick={() => handleClick('Greece')}/>
                    <h2>Greece</h2>
                </div>
                <div className='item3'>
                    <img src="/images/IMG_5110.JPG" alt="Italy" onClick={() => handleClick('Italy')}/>
                    <h2>Italy</h2>
                </div>
                <div className='item5'>
                    <img src="/images/IMG_5108.JPG" alt="Japan" onClick={() => handleClick('Japan')}/>
                    <h2>Japan</h2>
                </div>
                <div className='item4'>
                    <img src="/images/IMG_5105.JPG" alt="Indonesia " onClick={() => handleClick('Indonesia')}/>
                    <h2>Indonesia </h2>
                </div>
                <div className='item6'>
                    <img src="/images/IMG_5099.JPG" alt="Spain" onClick={() => handleClick('Spain')}/>
                    <h2>Spain</h2>
                </div>
            </div>
        </section>
     );
}

export default TopDestinations;