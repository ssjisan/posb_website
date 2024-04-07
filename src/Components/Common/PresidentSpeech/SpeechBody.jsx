import { Box, Grid, Typography } from "@mui/material";


export default function SpeechBody() {
    return (
        <Grid container spacing={3}>
            <Grid item md={3}>
                <Box sx={{ height: "260px", borderRadius: "16px", overflow:"hidden" }}>
                    <img src="/president.png" alt="President" height="100%" width="100%"/>
                </Box>
            </Grid>
            <Grid item md={9}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: "400 !important" }}>
                        It has been few decades that Orthopaedics is being practiced in our country. Today one will find an Orthopaedic surgeon in every corner of the country. We have NITOR, a 500 bed specialized Orthopaedic & Trauma hospital & institute, that many countries in the world do not have. There are Orthopaedic departments in every medical colleges & district hospitals & many of the Thana health complexes. Yet there are some lacking, the Orthopaedic subspecialties are not that developed as it should have been.
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "400 !important" }}>
                        It has been few decades that Orthopaedics is being practiced in our country. Today one will find an Orthopaedic surgeon in every corner of the country. We have NITOR, a 500 bed specialized Orthopaedic & Trauma hospital & institute, that many countries in the world do not have. There are Orthopaedic departments in every medical colleges & district hospitals & many of the Thana health complexes. Yet there are some lacking, the Orthopaedic subspecialties are not that developed as it should have been.
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h4" sx={{ fontWeight: "400 !important" }}>
                    It has been few decades that Orthopaedics is being practiced in our country. Today one will find an Orthopaedic surgeon in every corner of the country. We have NITOR, a 500 bed specialized Orthopaedic & Trauma hospital & institute, that many countries in the world do not have. There are Orthopaedic departments in every medical colleges & district hospitals & many of the Thana health complexes. Yet there are some lacking, the Orthopaedic subspecialties are not that developed as it should have been.
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h4" sx={{ fontWeight: "400 !important" }}>
                    It has been few decades that Orthopaedics is being practiced in our country. Today one will find an Orthopaedic surgeon in every corner of the country. We have NITOR, a 500 bed specialized Orthopaedic & Trauma hospital & institute, that many countries in the world do not have. There are Orthopaedic departments in every medical colleges & district hospitals & many of the Thana health complexes. Yet there are some lacking, the Orthopaedic subspecialties are not that developed as it should have been.
                </Typography>
            </Grid>
        </Grid>
    )
}
