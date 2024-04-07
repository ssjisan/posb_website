import { Box, Grid, Typography, TextField ,Button,useMediaQuery } from "@mui/material";

export default function ContactForm() {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    return (
        <Box sx={{ p: forBelow767 ? "100px 0px 40px 0px" : "210px 0px 64px 0px" }}>
            <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={8} md={8} lg={4}>
                    <Box sx={{ width: "100%", p: "32px 24px", borderRadius: "20px", border: "1px solid  rgba(145,142,175,0.32)", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "center", alignItems: "center" ,boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)"}}>
                        <Box sx={{ textAlign: "center", display: "flex", gap: "24px", flexDirection: "column", justifyContent: "center", width: "80%" }}>
                            <Typography variant="h3">Get in touch</Typography>
                            <Typography variant="h6" color="text.secondary">Send your message, we will get back to you soon. Maximum 24 hours we will take to communicate</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" size="medium" fullWidth />
                            <TextField id="outlined-basic" label="Email" variant="outlined" size="medium" fullWidth />
                            <TextField id="outlined-basic" label="Subject" variant="outlined" size="medium" fullWidth />
                            <TextField id="outlined-basic" label="Message" variant="outlined" size="medium" fullWidth multiline
                                rows={4} />
                        </Box>
                        <Button variant="contained" sx={{width:"220px"}}>Send</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
