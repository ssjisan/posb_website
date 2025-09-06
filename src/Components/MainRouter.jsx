import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import UpcomingEventsPage from "../Pages/UpcomingEventsPage";
import Contact from "../Pages/Contact";
import Gallerys from "../Pages/Gallery";
import Member from "../Pages/Member";
import { Toaster } from "react-hot-toast";
import Journal from "../Pages/Journal";
import Forms from "../Pages/Forms";
import Lectures from "../Pages/Lectures";
import AlbumView from "./Gallery/AlbumView";
import Registration from "./Registration/Registration";
import RegistrationTracker from "../Pages/RegistrationTracker";

export default function MainRoute() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="upcoming_events" element={<UpcomingEventsPage />} />
        <Route path="gallery" element={<Gallerys />} />
        <Route path="lectures" element={<Lectures />} />
        <Route path="contact" element={<Contact />} />
        <Route path="members" element={<Member />} />
        <Route path="link" element={<Journal />} />
        <Route path="forms" element={<Forms />} />
        <Route path="albums-preview/:id" element={<AlbumView />} />
        <Route path="registration/:id" element={<Registration />} />
        <Route path="registration-tracker/:id" element={<RegistrationTracker />} />
      </Routes>
    </>
  );
}
