import { Box, Grid, Typography, Container } from "@mui/material";

export default function MoreInfo() {
    return (
        <Container sx={{ mt: "40px", mb: "40px" }}>
            <Grid container>
                <Grid item lg={4}>
                    <Box sx={{ p: "24px", display: 'flex', flexDirection: "column", gap: "24px", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "64px", height: "64px", border: "1px solid #dbdbdb", borderRadius: "8px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <img src="/location.svg" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: "16px", justifyContent: "center", textAlign: "center" }}>
                            <Typography variant="h4">Address</Typography>
                            <Typography color="text.secondary" variant="h6">Health and Hope Hospital 152/1/H, Green road, Panthopath(Green road Panthopath Junction), Dhaka-1205</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4}>
                    <Box sx={{ p: "24px", display: 'flex', flexDirection: "column", gap: "24px", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "64px", height: "64px", border: "1px solid #dbdbdb", borderRadius: "8px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <img src="/mail.svg" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: "16px", justifyContent: "center", textAlign: "center" }}>
                            <Typography variant="h4">Email</Typography>
                            <Typography color="text.secondary" variant="h6">info@posb-bd.com</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4}>
                    <Box sx={{ p: "24px", display: 'flex', flexDirection: "column", gap: "24px", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "64px", height: "64px", border: "1px solid #dbdbdb", borderRadius: "8px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <img src="/phone.svg" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: "16px", justifyContent: "center", textAlign: "center" }}>
                            <Typography variant="h4">Phone</Typography>
                            <Typography color="text.secondary" variant="h6">+880-1740-559555 <br />
                                +880-01716281682</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
