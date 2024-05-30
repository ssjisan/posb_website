import { Container, Box, Grid, useMediaQuery } from "@mui/material";
import HeaderSection from "./HeaderSection";
import EventInfo from "./EventInfo";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LatestEvent() {
  const { pathname } = useLocation();
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const [lastEvent, setLastEvent] = useState(null);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/events");
      if (data.length > 0) {
        setLastEvent(data[data.length - 1]);
      }
    } catch (err) {
      console.log("Check");
    }
  };
  return (
    <Box
      sx={{
        p:
          pathname === "/upcoming_events"
            ? forBelow767
              ? "100px 0px 40px 0px"
              : "210px 0px 64px 0px"
            : forBelow767
            ? "40px 0px"
            : "64px 0px",
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <EventInfo lastEvent={lastEvent} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={`${process.env.REACT_APP_SERVER_API}/event/image/${lastEvent?._id}`}
                alt="Event Image"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
