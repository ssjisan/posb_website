import { Box, Container } from "@mui/material";
import HeaderSection from "./HeaderSection";
import Albums from "./Albums";

export default function AlbumList() {
    return (
        <Box sx={{ p: "210px 0px", background: "#FAFAFA" }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                <HeaderSection />
                <Albums />
            </Container>
        </Box>
    )
}
