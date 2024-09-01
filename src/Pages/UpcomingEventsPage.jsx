import LatestEvent from "../Components/Common/LatestEvent/LatestEvent";
import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import Location from "../Components/Common/Location";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UpcomingEventsPage() {
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
            <Navbar />
            <LatestEvent />
            {events.length > 1 && <UpcomingEvents />}
            <Location />
            <Footer />
        </>
    )
}
