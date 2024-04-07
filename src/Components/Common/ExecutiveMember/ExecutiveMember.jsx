import { Box, Container } from "@mui/material";
import HeaderSection from "./HeaderSection";
import ExecutiveSlider from "./ExecutiveSlider";

export default function ExecutiveMember() {
    return (
        <Box sx={{ p: "64px 0px" }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                <HeaderSection />
                <ExecutiveSlider />
            </Container>
        </Box>
    )
}
