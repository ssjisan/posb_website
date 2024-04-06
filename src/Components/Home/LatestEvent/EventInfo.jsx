import { Box, Typography } from '@mui/material'
import { Calender, Clock, Location } from '../../../assets/Icons'


export default function EventInfo() {
    const DetailsSx = {
        width: "100%",
        maxWidth: "450px",
        mt: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
    }
    const IconBoxSx = {
        width: "24px",
        height: "24px"
    }
    const PointSx = {
        display: "flex",
        gap: "16px"
    }
    return (
        <Box sx={{ mt: "40px" }}>
            <Typography variant='h3'>POSBCON 2024</Typography>
            <Box sx={DetailsSx}>
                <Box sx={PointSx}>
                    <Box sx={IconBoxSx}>
                        <Calender />
                    </Box>
                    <Typography variant='h6'>24-25th February, 2024.</Typography>
                </Box>
                <Box sx={PointSx}>
                    <Box sx={IconBoxSx}>
                        <Clock />
                    </Box>
                    <Typography variant='h6'>05:00 PM - 07:00 PM.</Typography>
                </Box>
                <Box sx={PointSx}>
                    <Box sx={IconBoxSx}>
                        <Location />
                    </Box>
                    <Typography variant='h6'>Health and Hope Hospital 152/1/H, Green road, Panthopath(Green road Panthopath junction), Dhaka-1205.</Typography>
                </Box>
            </Box>
        </Box>
    )
}
