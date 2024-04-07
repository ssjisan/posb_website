import { Box, Container } from "@mui/material";
import HeaderSection from "./HeaderSection";
import NewsSlider from "./NewsSlider";

export default function NoticeNews() {
    return (
        <Box sx={{ p: "64px 0px" }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                <HeaderSection />
                <NewsSlider />
            </Container>
        </Box>
    )
}
