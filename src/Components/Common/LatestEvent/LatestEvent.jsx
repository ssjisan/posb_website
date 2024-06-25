import { Container, Box, Grid, useMediaQuery, Skeleton } from "@mui/material";
import HeaderSection from "./HeaderSection";
import EventInfo from "./EventInfo";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LatestEvent() {
  const { pathname } = useLocation();
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const [lastEvent, setLastEvent] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { data } = await axios.get("https://posb-server.vercel.app/events");
      if (data.length > 0) {
        setLastEvent(data[0]);
      }
    } catch (err) {
      toast.error("Event Loading Problem.");
    } finally {
      setLoading(false); // Set loading to false after data is loaded
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
            <EventInfo lastEvent={lastEvent} loading={loading}/>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
          <Box
              sx={{
                width: "100%",
                height: "320px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(145,142,175, .32)",
              }}
            >
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              ) : (
                <img
                  src={`https://posb-server.vercel.app/event/image/${lastEvent?._id}`}
                  alt="Event Image"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
