import { Container, Box, Grid, useMediaQuery } from '@mui/material'
import HeaderSection from './HeaderSection'
import EventInfo from './EventInfo'
import { useLocation } from "react-router-dom";

export default function LatestEvent() {
    const { pathname } = useLocation();
    const forBelow767 = useMediaQuery("(max-width:767px)");

    return (
        <Box sx={{
            p: pathname === "/upcoming_events"
                ? (forBelow767 ? "100px 0px 40px 0px" : "210px 0px 64px 0px")
                : (forBelow767 ? "40px 0px" : "64px 0px")
        }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: forBelow767 ? "40px" : "64px" }}>
                <HeaderSection />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <EventInfo />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ width: "100%", height: "100%", borderRadius: "16px", overflow: "hidden" }}>
                            <img src="/latest.png" alt="Event Image" width="100%" height="100%" style={{ objectFit: "cover" }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
