import { Box, Typography, Grid } from "@mui/material";
import { AlbumIcon } from "../../assets/Icons";

export default function Albums() {
    const IconBoxSx = {
        width: "24px",
        height: "24px"
    }
    const PointSx = {
        display: "flex",
        gap: "4px",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "110px"
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={1} sm={6} md={4} lg={4}>
                <Box sx={{ display: "flex", gap: "24px", flexDirection: "column", p: "24px 12px" }}>
                    <Box sx={{ width: "100%", height: "260px", overflow: "hidden", borderRadius: "16px" }}>
                        <img src="/public/event1.png" alt="" width="100%" height="100%" />
                    </Box>
                    <Box sx={{ display: "flex", gap: "24px", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <Typography variant='h4'>POSBCON 2024</Typography>
                        <Box sx={PointSx}>
                            <Box sx={IconBoxSx}>
                                <AlbumIcon />
                            </Box>
                            <Typography variant='body1' color={"text.secondary"}>5 Images</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
