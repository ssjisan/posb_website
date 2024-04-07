import { Box, Typography, Grid } from '@mui/material'
import MemberData from "../../../assets/MemberList.json"
export default function MemberBody() {
    return (
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {
                MemberData.map((data) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={data.id}>
                            <Box sx={{ display: "flex", gap: "24px", flexDirection: "column", alignItems: "center", width: "100%" }} >
                                <Box sx={{ width: "140px", height: "140px", overflow: "hidden", borderRadius: "200px" }}>
                                    <img src={data.imgUrl} alt="" width="100%" height="100%" />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center", height: "90px" }}>
                                    <Typography variant="h5">{data.name}</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: "300 !important" }}>{data.position}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
