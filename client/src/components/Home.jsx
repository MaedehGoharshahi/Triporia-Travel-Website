import BookingWidget from "./BookingWidget";
import Header from "./Header";
import HeroSection from "./Home/HeroSection";
import Introduction from "./Home/Introduction";
import Services from "./Home/Services";
import TopDestinations from "./Home/TopDestinations";
import TopTours from "./Home/TopTours";

function Home() {
    return ( 
        <>
            <Header/>
            <HeroSection/>
            <Services/>
            <TopDestinations/>
            <Introduction/>
            <BookingWidget/>
            <TopTours></TopTours>
        </>
     );
}

export default Home;