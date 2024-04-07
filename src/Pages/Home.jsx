import ExecutiveMember from "../Components/Home/ExecutiveMember/ExecutiveMember";
// import HeroSection from "../Components/Home/HeroSection";
import LatestEvent from "../Components/Common/LatestEvent/LatestEvent";
import Location from "../Components/Home/Location";
import OurJourney from "../Components/Common/OurJourney/OurJourney";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import PresidentSpeech from "../Components/Common/PresidentSpeech/PresidentSpeech";
import EventNews from "../Components/Home/Notice&News/NoticeNews";

export default function Home() {
    return (
        <>
            <Navbar />
            {/* <HeroSection /> */}
            <OurJourney />
            <ExecutiveMember />
            <LatestEvent />
            <UpcomingEvents />
            <PresidentSpeech />
            <EventNews />
            <Location />
            <Footer />
        </>
    )
}
