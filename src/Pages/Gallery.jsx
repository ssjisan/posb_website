// import HeroSection from "../Components/Home/HeroSection";
import UpcomingEvents from "../Components/Common/UpComingEvents/UpcomingEvents";
import AlbumList from "../Components/Gallery/AlbumList";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
export default function Gallerys() {
    return (
        <>
            <Navbar />
            <AlbumList />
            <UpcomingEvents />
            <Footer />
        </>
    )
}
