import OurJourney from "../Components/Common/OurJourney/OurJourney";
import Ourmember from "../Components/Common/OurMember/Ourmember";
import PresidentSpeech from "../Components/Common/PresidentSpeech/PresidentSpeech";
import ExecutiveSlider from "../Components/Home/ExecutiveMember/ExecutiveSlider";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import { useMediaQuery } from "@mui/material";

export default function Member() {
    const forBelow599 = useMediaQuery("(max-width:599px)");

    return (
        <>
            <Navbar />
            <OurJourney />
            {forBelow599 ? <ExecutiveSlider /> : <Ourmember />}
            <PresidentSpeech />
            <Footer />
        </>
    )
}
