// import HeroSection from "../Components/Home/HeroSection";
import Location from "../Components/Common/Location";
import ContactForm from "../Components/Contact/ContactForm";
import MoreInfo from "../Components/Contact/MoreInfo";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
export default function Contact() {
    return (
        <>
            <Navbar />
            <ContactForm />
            <MoreInfo />
            <Location />
            <Footer />
        </>
    )
}
