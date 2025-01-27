import { Container, Box, Grid, useMediaQuery, Skeleton } from "@mui/material";
import HeaderSection from "./HeaderSection";
import EventInfo from "./EventInfo";
import { useContext, useEffect, useState } from "react";
import EventDrawer from "../../Events/EventDrawer";
import axios from "axios";
import { DataContext } from "../../../DataProcessing/DataProcessing";

export default function LatestEvent() {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer
  const { latestEvent, loading } = useContext(DataContext);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        p: forBelow767 ? "40px 0px" : "64px 0px",
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
            <EventInfo
              lastEvent={latestEvent}
              loading={loading}
              onEventDetailsClick={toggleDrawer(true)} // Pass the toggle function
            />
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
                  src={latestEvent?.coverPhoto[0].url}
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
      <EventDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        eventData={latestEvent}
      />
    </Box>
  );
}
