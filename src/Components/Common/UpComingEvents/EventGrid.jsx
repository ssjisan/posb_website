import { Box, Typography, Skeleton, Grid } from "@mui/material";
import { Calender, Clock, Location } from "../../../assets/Icons";
import { format } from "date-fns";
import PropTypes from "prop-types";

export default function EventGrid({ events }) {
  const DetailsSx = {
    width: "100%",
    maxWidth: "450px",
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
    <Grid container spacing={2}>
      {events.map((data) => (
        <Grid item xs={12} sm={12} md={6} lg={6} key={data._id}>
          <Box
            sx={{
              display: "flex !important",
              gap: "24px",
              flexDirection: "column",
              p: "24px 12px",
            }}
            key={data.id}
          >
            <Box
              sx={{
                width: "100%",
                height: "240px",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              {data ? (
                <img
                  src={`https://posb-server.vercel.app/event/image/${data._id}`}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {data ? (
                <>
                  <Typography variant="h4">{data.name}</Typography>
                  <Box sx={DetailsSx}>
                    <Box sx={{ ...PointSx, alignItems: "center" }}>
                      <Box sx={IconBoxSx}>
                        <Calender />
                      </Box>
                      <Typography variant="body1">
                        {format(new Date(data?.eventDate), "dd/MM/yyyy")}
                      </Typography>
                    </Box>
                    <Box sx={{ ...PointSx, alignItems: "center" }}>
                      <Box sx={IconBoxSx}>
                        <Clock />
                      </Box>
                      <Typography variant="body1">{data.eventTime}</Typography>
                    </Box>
                    <Box sx={PointSx}>
                      <Box sx={IconBoxSx}>
                        <Location />
                      </Box>
                      <Typography variant="body1">{data.location}</Typography>
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Skeleton variant="text" width="80%" height={40} />
                  <Skeleton variant="text" width="60%" height={20} />
                  <Skeleton variant="text" width="60%" height={20} />
                  <Skeleton variant="text" width="80%" height={20} />
                </>
              )}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

EventGrid.propTypes = {
  events: PropTypes.array.isRequired,
};
