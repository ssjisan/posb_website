import { Container, Box, useMediaQuery } from '@mui/material'

export default function Location() {
    const forBelow767 = useMediaQuery("(max-width:767px)");
    const forBelow676 = useMediaQuery("(max-width:676px)");

    return (
        <Box sx={{ p: forBelow767 ? "40px 0px" : "64px 0px" }}>
            <Container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.880722842078!2d90.38300137605124!3d23.751632488727687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a53849f04b%3A0x8aff35de1b491672!2sHealth%20and%20Hope%20Hospital!5e0!3m2!1sen!2sbd!4v1712430703175!5m2!1sen!2sbd" width="100%" height={forBelow676 ? "360" : "450"} style={{ border: 0, borderRadius: "20px" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Container>
        </Box>
    )
}
