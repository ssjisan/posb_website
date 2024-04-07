import LatestEvent from "../Components/Common/LatestEvent/LatestEvent";
import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import Location from "../Components/Home/Location";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function UpcomingEventsPage() {
    return (
        <>
            <Navbar />
            <LatestEvent />
            <UpcomingEvents />
            <Location />
            <Footer />
        </>
    )
}
