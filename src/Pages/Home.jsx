import HeroSection from "../Components/Home/HeroSection";
import LatestEvent from "../Components/Common/LatestEvent/LatestEvent";
import OurJourney from "../Components/Common/OurJourney/OurJourney";
import Footer from "../Layout/Footer/Footer";
import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import PresidentSpeech from "../Components/Common/PresidentSpeech/PresidentSpeech";
import EventNews from "../Components/Common/Notice&News/NoticeNews";
import Location from "../Components/Common/Location";
import ExecutiveMember from "../Components/Common/ExecutiveMember/ExecutiveMember";
import { useContext } from "react";
import BigEventModal from "../Components/Common/BigEvent/BigEventModal";
import Navbar from "../Layout/Navbar/Navbar";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function Home() {
  const { events, isModalOpen, handleCloseModal } = useContext(DataContext);

  return (
    <>
      <BigEventModal open={isModalOpen} onClose={handleCloseModal} />
      <Navbar />
      <HeroSection />
      {events.length > 1 && <LatestEvent />}
      {events.length > 1 && <UpcomingEvents />}
      <OurJourney />
      <PresidentSpeech />
      <ExecutiveMember />
      <EventNews />
      <Location />
      <Footer />
    </>
  );
}
