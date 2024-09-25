import OurJourney from "../Components/Common/OurJourney/OurJourney";
import Ourmember from "../Components/Common/OurMember/Ourmember";
import PresidentSpeech from "../Components/Common/PresidentSpeech/PresidentSpeech";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function Member() {

    return (
        <>
            <Navbar />
            <Ourmember />
            <OurJourney />
            <PresidentSpeech />
            <Footer />
        </>
    )
}
