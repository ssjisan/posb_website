import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import HeaderSection from './HeaderSection'
import { useLocation } from "react-router-dom";

export default function OurJourney() {

    const { pathname } = useLocation();
    const forBelow767 = useMediaQuery("(max-width:767px)");

    return (
        <Box sx={{
            p: "40px 0px"
            , background: pathname === "/upcoming_events" ? "#FFF" : "#FAFAFA"
        }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: forBelow767 ? "40px" : "64px" }}>
                <HeaderSection />
                <Typography variant='h5'>POSB was founded on September 6, 2012, with its inaugural meeting chaired by Prof. R.R. Kairy and attended by nine members. The attendees included Prof. R.R. Kairy, Dr. Sarwar Ibne Salam, Dr. A.K.M. Zahiruddin, Dr. Mehedi Newaz, Dr. Shyamal Chandra Debnath, Prof. Parviz Shahidi Ghamsiri, Dr. Sayed Ahmed, Dr. Dipankar Nath Talukdar, and Dr. Somirul Islam</Typography>
                <Box sx={{ width: "100%" }}>
                    <img src="/journey.webp" alt="Image About Us" width="100%" height="100%" style={{ objectFit: "cover" }} />
                </Box>
            </Container>
        </Box>
    )
}
