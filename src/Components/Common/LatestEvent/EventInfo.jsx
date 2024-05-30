import { Box, Typography, useMediaQuery } from "@mui/material";
import { Calender, Clock, Location } from "../../../assets/Icons";
import { format } from "date-fns";

export default function EventInfo({lastEvent}) {
  const forBelow599 = useMediaQuery("(max-width:599px)");

  const DetailsSx = {
    width: "100%",
    maxWidth: "450px",
    mt: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };
  const IconBoxSx = {
    width: "24px",
    height: "24px",
  };
  const PointSx = {
    display: "flex",
    gap: "16px",
  };

  
  return (
    <>
      {lastEvent ? (
        <Box sx={{ mt: !forBelow599 && "40px" }}>
          <Typography variant="h3">{lastEvent?.name}</Typography>
          <Box sx={DetailsSx}>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Calender />
              </Box>
              <Typography variant="h6">
                {format(new Date(lastEvent?.eventDate), "dd/MM/yyyy")}
              </Typography>
            </Box>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Clock />
              </Box>
              <Typography variant="h6">{lastEvent?.eventTime}</Typography>
            </Box>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Location />
              </Box>
              <Typography variant="h6">{lastEvent?.location}</Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography>No latest Event</Typography>
      )}
    </>
  );
}
