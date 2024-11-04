import {
  Box,
  Container,
  useMediaQuery,
  Typography,
  Skeleton,
} from "@mui/material";
import HeaderSection from "./HeaderSection";
import EventsSlider from "./EventsSlider";
import { useContext, useState } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import toast from "react-hot-toast"; // Import the toast library

export default function UpcomingEvents() {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const [activeIndex, setActiveIndex] = useState(0); // Initialize active index state
  const { loading, events } = useContext(DataContext);

  // Show an error toast if events could not load and loading is false
  if (!loading && events.length === 0) {
    toast.error("Event data couldn't load properly. Try again later.");
  }

  return (
    <Box
      sx={{
        p: forBelow767 ? "40px 0px" : "64px 0px",
        background: "#FAFAFA",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: forBelow767 ? "40px" : "64px",
        }}
      >
        <HeaderSection />
        {loading ? (
          <Box>
            {/* Skeleton for Slider */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height="240px"
                sx={{ borderRadius: "16px" }}
              />
              <Skeleton variant="text" width="80%" height="32px" />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="80%" />
            </Box>
          </Box>
        ) : (
          events.length > 0 ? (
            <EventsSlider
              loading={loading}
              setActiveIndex={setActiveIndex}
              events={events}
              activeIndex={activeIndex}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "240px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#919EAB",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Event data couldn&lsquo;t load properly
                <br />
                Try again later.
              </Typography>
            </Box>
          )
        )}
      </Container>
    </Box>
  );
}
