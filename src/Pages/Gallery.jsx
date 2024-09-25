// import HeroSection from "../Components/Home/HeroSection";
import { useEffect, useState } from "react";
import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import AlbumList from "../Components/Gallery/AlbumList";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import axios from "axios";
import LatestEvent from "../Components/Common/LatestEvent/LatestEvent";
export default function Gallerys() {
  const [events, setEvents] = useState([]);
  // Load Event
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const response = await axios.get("https://posb-server.vercel.app/events");
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(events.length);
  
  return (
    <>
      <Navbar />
      <AlbumList />
      {events.length> 1 ? <UpcomingEvents /> : <LatestEvent />}
      <Footer />
    </>
  );
}
