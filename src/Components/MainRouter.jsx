import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import UpcomingEventsPage from "../Pages/UpcomingEventsPage";
import Contact from "../Pages/Contact";
import Gallerys from "../Pages/Gallery";
import Member from "../Pages/Member";


export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="upcoming_events" element={<UpcomingEventsPage />} />
      <Route path="gallery" element={<Gallerys />} />
      <Route path="contact" element={<Contact />} />
      <Route path="members" element={<Member />} />
    </Routes>
  );
}