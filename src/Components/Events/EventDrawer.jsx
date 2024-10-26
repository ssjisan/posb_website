import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Calender, Clock, Close, Location } from "../../assets/Icons";
import { format } from "date-fns";

export default function EventDrawer({ toggleDrawer, open, eventData }) {
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

  const DrawerList = (
    <Box sx={{ width: 360 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ p: "16px 24px" }}
      >
        <Typography variant="h5">Event Details</Typography>
        <Close />
      </Stack>
      <Divider />
      <Stack sx={{ p: "16px 24px" }} gap="16px">
        <Box
          sx={{
            width: "100%",
            height: "240px",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <img
            src={`https://posb-server.vercel.app/event/image/${eventData?._id}`}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Typography variant="h4">{eventData?.name}</Typography>
        <Box sx={{ ...PointSx, alignItems: "center" }}>
          <Box sx={IconBoxSx}>
            <Calender />
          </Box>
          {eventData?.eventDate ? (
            <Typography variant="body1">
              {format(new Date(eventData?.eventDate), "dd/MM/yyyy")}
            </Typography>
          ) : (
            <Typography variant="body1">Date not available</Typography>
          )}
        </Box>
        <Box sx={{ ...PointSx, alignItems: "center" }}>
          <Box sx={IconBoxSx}>
            <Clock />
          </Box>
          <Typography variant="body1">{eventData?.eventTime}</Typography>
        </Box>
        <Box sx={PointSx}>
          <Box sx={IconBoxSx}>
            <Location />
          </Box>
          <Typography variant="body1">{eventData?.location}</Typography>
        </Box>
        {eventData?.registrationLink ? (
          eventData?.linkExpire ? (
            <Typography variant="body1" color="error">
              Registration is Closed
            </Typography>
          ) : (
            <Button variant="contained" href={eventData?.registrationLink}>
              Registration
            </Button>
          )
        ) : null}
      </Stack>
      <Divider />
      <Stack gap="8px" sx={{ p: "16px 24px" }}>
        <Typography variant="h4">About this event</Typography>
        <Typography variant="body1">{eventData?.description}</Typography>
      </Stack>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
      {DrawerList}
    </Drawer>
  );
}

EventDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  eventData: PropTypes.object, // event prop containing the event data
};

EventDrawer.defaultProps = {
  event: null, // Default null if no event is provided
};
