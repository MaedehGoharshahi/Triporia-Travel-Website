import Header from "./Header";
import HeroSection from "./Home/HeroSection";
import Introduction from "./Home/Introduction";
import Services from "./Home/Services";
import TopDestinations from "./Home/TopDestinations";

function Home() {
    return ( 
        <>
            <Header/>
            <HeroSection/>
            <Services/>
            <TopDestinations/>
            <Introduction/>
        </>
     );
}

export default Home;