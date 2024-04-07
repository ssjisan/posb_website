import HeaderSection from "./HeaderSection";
import { Box, Container, useMediaQuery } from "@mui/material";
import SpeechBody from "./SpeechBody";

export default function PresidentSpeech() {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    return (
        <Box sx={{ p:forBelow767 ? "40px 0px" : "64px 0px", background: "#FAFAFA" }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: forBelow767 ? "40px" : "64px" }}>
                <HeaderSection />
                <SpeechBody />
            </Container>
        </Box>
    )
}
