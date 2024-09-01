import { useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import HeaderSection from "./HeaderSection";
import JournalTable from "./JournalTable";

export default function JournalList() {
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
        <Box>
          <JournalTable/>
        </Box>
      </Container>
    </Box>
  );
}
