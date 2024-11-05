import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import Location from "../Components/Common/Location";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function UpcomingEventsPage() {
  const { events } = useContext(DataContext);
  return (
    <>
      <Navbar />
      {events.length > 1 && <UpcomingEvents />}
      <Location />
      <Footer />
    </>
  );
}
