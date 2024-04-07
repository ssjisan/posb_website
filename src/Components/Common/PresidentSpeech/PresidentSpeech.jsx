import HeaderSection from "./HeaderSection";
import { Box, Container } from "@mui/material";
import SpeechBody from "./SpeechBody";

export default function PresidentSpeech() {
    return (
        <Box sx={{ p: "64px 0px", background: "#FAFAFA" }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                <HeaderSection />
                <SpeechBody />
            </Container>
        </Box>
    )
}
