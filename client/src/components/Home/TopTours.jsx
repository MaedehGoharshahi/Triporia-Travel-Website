import { useState, useEffect } from "react";
import '../../css/Home/TopTours.css';

function TopTours() {
  const [topTours] = useState([
    {
      id: 1,
      name: "Wild Safari Adventure in Kenya",
      price: "$ 2100",
      location: "Kenya",
      days: "7 Days",
      score: 9.2,
      imageAdd: "/images/tours/david-clode-YV_WwNH09cI-unsplash.jpg",
    },
    {
      id: 2,
      name: "Luxury City Tour of Paris",
      price: "$ 3200",
      location: "France",
      days: "5 Days",
      score: 9.5,
      imageAdd: "/images/tours/kiarash-mansouri-lPYbaH6jsBw-unsplash.jpg",
    },
    {
      id: 3,
      name: "Tropical Escape to Bali Beaches",
      price: "$ 1850",
      location: "Indonesia",
      days: "6 Days",
      score: 8.7,
      imageAdd: "/images/tours/pexels-pok-rie-33563-321474.jpg",
    },
    {
      id: 4,
      name: "Ancient Wonders of Athens",
      price: "$ 1400",
      location: "Greece",
      days: "4 Days",
      score: 8.3,
      imageAdd: "/images/tours/pexels-sakuratosoju-29894258.jpg",
    },
    {
      id: 5,
      name: "Desert Nights in Magical Morocco",
      price: "$ 1700",
      location: "Morocco",
      days: "5 Days",
      score: 8.9,
      imageAdd: "/images/tours/manav-jain-KomOjNU97bY-unsplash.jpg",
    },
    {
      id: 6,
      name: "Amazon Jungle Expedition",
      price: "$ 2400",
      location: "Brazil",
      days: "8 Days",
      score: 9.1,
      imageAdd: "/images/tours/ivars-utinans-vkQgb1lZZPQ-unsplash.jpg",
    },
    {
      id: 7,
      name: "Cultural Journey Through Kyoto",
      price: "$ 2300",
      location: "Japan",
      days: "6 Days",
      score: 9.1,
      imageAdd: "/images/tours/james-pere-KGf-6WoIb3M-unsplash.jpg",
    },
    {
      id: 8,
      name: "Alpine Hiking & Climbing Experience",
      price: "$ 2600",
      location: "Switzerland",
      days: "7 Days",
      score: 9.4,
      imageAdd: "/images/tours/david-magalhaes-lgdH8f69_JQ-unsplash.jpg",
    }
  ]);

  const [visibleCount, setVisibleCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const calculateVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 992) return 8;
    else if (width >= 768) return 6;
    else if (width >= 480) return 4;
    else return 2;
  };

  useEffect(() => {
    const updateCount = () => {
      if (!showAll) {
        const count = calculateVisibleCount();
        setVisibleCount(count);
      }
    };

    updateCount(); 
    window.addEventListener("resize", updateCount); 

    return () => {
      window.removeEventListener("resize", updateCount); 
    };
  }, [showAll]);

  const handleViewMore = () => {
    setVisibleCount(topTours.length);
    setShowAll(true);
  };

  const visibleTours = topTours.slice(0, visibleCount);

  return (
    <section className="top-tours">
      <div className="content">
        <p className="title">Popular Packages ___</p>
        <h1>Find Popular <span>Tours</span></h1>
      </div>
      <div className="tours">
        {visibleTours.map((item) => (
          <div className="item" key={item.id}>
            <p><i className='bx bxs-star'></i> {item.score}</p>
            <img src={item.imageAdd} alt="" />
            <div className="tour-header">
              <h2>{item.price}</h2>
              <h1>{item.name}</h1>
            </div>
            <div className="tour-info">
              <h3><i className='bx bx bx-map'></i> {item.location}</h3>
              <h3><i className='bx bx bx-time'></i> {item.days}</h3>
            </div>
          </div>
        ))}
      </div>

      {!showAll && visibleCount < topTours.length && (
        <button onClick={handleViewMore}>View More</button>
      )}
    </section>
  );
}

export default TopTours;
