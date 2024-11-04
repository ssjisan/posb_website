import HeroSection from "../Components/Home/HeroSection";
import LatestEvent from "../Components/Common/LatestEvent/LatestEvent";
import OurJourney from "../Components/Common/OurJourney/OurJourney";
import Footer from "../Layout/Footer/Footer";
import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import PresidentSpeech from "../Components/Common/PresidentSpeech/PresidentSpeech";
import EventNews from "../Components/Common/Notice&News/NoticeNews";
import Location from "../Components/Common/Location";
import ExecutiveMember from "../Components/Common/ExecutiveMember/ExecutiveMember";
import { useEffect, useState } from "react";
import BigEventModal from "../Components/Common/BigEvent/BigEventModal";
import Navbar from "../Layout/Navbar/Navbar";
import axios from "axios";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("modalLastShown");
    const now = new Date().getTime();

    // Show modal if 24 hours have passed since the last shown time
    if (!lastShown || now - lastShown > 24 * 60 * 60 * 1000) {
      setIsModalOpen(true);
      localStorage.setItem("modalLastShown", now);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [events, setEvents] = useState([]);
  // Load Event
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const response = await axios.get('https://posb-server.vercel.app/events');
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BigEventModal open={isModalOpen} onClose={handleCloseModal} />
      <Navbar/>
      <HeroSection />
      <LatestEvent />
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
