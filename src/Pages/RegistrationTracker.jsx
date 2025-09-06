import { useLocation } from "react-router-dom";
import Tracker from "../Components/Registration/Tracker";
import Navbar from "../Layout/Navbar/Navbar";

export default function RegistrationTracker() {
  const location = useLocation();
  const registrationId = location.state?.registrationId;
  return (
    <>
      <Navbar />
      <Tracker registrationId={registrationId} />
    </>
  );
}
