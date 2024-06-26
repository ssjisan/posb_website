import { Box, Container, useMediaQuery } from "@mui/material";
import HeaderSection from "./HeaderSection";
import EventsSlider from "./EventsSlider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UpcomingEvents() {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const [activeIndex, setActiveIndex] = useState(0); // Initialize active index state
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(false);

  // Load Event
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const response = await axios.get('https://posb-server.vercel.app/events');
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };


  return (
    <>
      {events.length > 1 && (
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
            <EventsSlider
                loading={loading}
                setActiveIndex={setActiveIndex}
                events={events}
                activeIndex={activeIndex}
                error={error}
              />
          </Container>
        </Box>
      )}
    </>
  );
}
