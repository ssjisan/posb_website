import ExecutiveMember from "../Components/Home/ExecutiveMember/ExecutiveMember";
import HeroSection from "../Components/Home/HeroSection";
import LatestEvent from "../Components/Home/LatestEvent/LatestEvent";
import Location from "../Components/Home/Location";
import OurJourney from "../Components/Home/OurJourney/OurJourney";
import Footer from "../Layout/Footer/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ExecutiveMember />
            <OurJourney />
            <LatestEvent />
            <Location />
            <Footer />
        </>
    )
}
