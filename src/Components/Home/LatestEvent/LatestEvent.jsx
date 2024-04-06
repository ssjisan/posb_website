import { Container, Box, Grid } from '@mui/material'
import HeaderSection from './HeaderSection'
import EventInfo from './EventInfo'

export default function LatestEvent() {
    return (
        <Box sx={{ p: "64px 0px" }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                <HeaderSection />
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <EventInfo />
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ width: "100%", height:"100%", borderRadius: "16px", overflow: "hidden" }}>
                            <img src="/latest.png" alt="Event Image" width="100%" height="100%" style={{ objectFit: "cover" }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
