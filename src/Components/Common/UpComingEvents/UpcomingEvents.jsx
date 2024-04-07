import { Box, Container } from '@mui/material'
import HeaderSection from './HeaderSection'
import EventsSlider from './EventsSlider'

export default function UpcomingEvents() {
    return (
        <Box sx={{ p: "64px 0px", background: "#FAFAFA" }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                <HeaderSection />
                <EventsSlider />
            </Container>
        </Box>
    )
}
