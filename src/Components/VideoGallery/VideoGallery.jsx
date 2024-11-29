import { Box, Container, useMediaQuery } from "@mui/material";
import HeaderSection from "./HeaderSection";
import VideoCardDeck from "./VideoCardDeck";

export default function VideoGallery() {
  const forBelow767 = useMediaQuery("(max-width:767px)");

  return (
    <Box sx={{ p: forBelow767 ? "100px 0px 40px 0px" : "210px 0px 64px 0px" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: forBelow767 ? "40px" : "64px",
        }}
      >
        <HeaderSection />
        <VideoCardDeck />
      </Container>
    </Box>
  );
}
