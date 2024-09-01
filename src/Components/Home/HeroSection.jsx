import { Box, Container, Typography } from "@mui/material";
// import Navbar from "../../Layout/Navbar/Navbar";

export default function HeroSection() {
  const MainBoxSx = {
    backgroundImage: "url('/bg.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
  };
  const ContainerSx = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const ContentSx = {
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    display: "flex",
  };
  return (
    <Box sx={MainBoxSx}>
      <Container sx={ContainerSx}>
        <Box sx={ContentSx}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "#fff",
            }}
          >
            Advocating for orthopedic patients&apos; needs, promoting excellence
            in care
          </Typography>
          <Typography
                      variant="h4"
            sx={{
              width:"100%",
              maxWidth:"720px",
              textAlign: "center",
              color: "#fff",
              fontWeight: "300 !important",
            }}
          >
            Promoting excellence in patient care and avocation for the needs of
            patients with Orthopeadic condition
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
