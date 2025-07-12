import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./Home/HeroSection";
import Introduction from "./Home/Introduction";
import Services from "./Home/Services";
import Testimonial from "./Home/Testimonial";
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
            <TopTours/>
            <Testimonial/>
            <Footer/>
        </>
     );
}

export default Home;