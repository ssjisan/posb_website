import { Box, Typography } from "@mui/material";

export default function HeaderSection() {
    return (
        <Box sx={{ display: "flex", gap: "24px", alignItems: "flex-end" }}>
            <Typography variant="h3"> <Box component="span" sx={{ fontWeight: "300 !important" }}>President
            </Box> Speech</Typography>
            <Box sx={{ height: "16px", borderTop: "2px solid rgba(145,142,175, .32)", width: "100%" }}>
            </Box>
        </Box>
    )
}

