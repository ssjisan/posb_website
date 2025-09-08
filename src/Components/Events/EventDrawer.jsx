import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Calender, Clock, Close, Location } from "../../assets/Icons";
import { format, isAfter, isBefore } from "date-fns";

export default function EventDrawer({ toggleDrawer, open, eventData }) {
  const IconBoxSx = {
    width: "24px",
    height: "24px",
  };
  const PointSx = {
    display: "flex",
    gap: "16px",
  };

  // ✅ Handle registration logic
  const now = new Date();
  const startDate = eventData?.registrationStartDate
    ? new Date(eventData.registrationStartDate)
    : null;
  const endDate = eventData?.registrationEndDate
    ? new Date(eventData.registrationEndDate)
    : null;

  let registrationStatus = "notRequired"; // default
  if (eventData?.registrationRequired) {
    if (startDate && isBefore(now, startDate)) {
      registrationStatus = "notStarted";
    } else if (
      startDate &&
      endDate &&
      isAfter(now, startDate) &&
      isBefore(now, endDate)
    ) {
      registrationStatus = "open";
    } else if (endDate && isAfter(now, endDate)) {
      registrationStatus = "closed";
    }
  }

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
            src={
              eventData?.coverPhoto?.url
                ? eventData.coverPhoto.url
                : "/placeholder.png"
            }
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
              {format(new Date(eventData.eventDate), "dd MMMM, yyyy")}
            </Typography>
          ) : (
            <Typography variant="body1">Date not available</Typography>
          )}
        </Box>

        <Box sx={{ ...PointSx, alignItems: "center" }}>
          <Box sx={IconBoxSx}>
            <Clock />
          </Box>
          {eventData?.eventTime ? (
            <Typography variant="body1">
              {format(new Date(eventData.eventTime), "hh:mm a")}
            </Typography>
          ) : (
            <Typography variant="body1">Time not available</Typography>
          )}
        </Box>

        <Box sx={PointSx}>
          <Box sx={IconBoxSx}>
            <Location />
          </Box>
          <Typography variant="body1">{eventData?.location}</Typography>
        </Box>

        {/* ✅ Registration Logic */}
        {eventData?.registrationRequired && (
          <>
            {registrationStatus === "notStarted" && (
              <Box
                sx={{
                  background: "rgba(128, 128, 128, 0.2)",
                  p: "8px",
                  textAlign: "center",
                   borderRadius:"8px"
                }}
              >
                <Typography variant="body1" sx={{ color: "#808080" }}>
                  Registration has not started yet
                </Typography>
              </Box>
            )}
            {registrationStatus === "open" && (
              <Button
                variant="contained"
                href={`/registration/${eventData._id}`}
                rel="noopener noreferrer"
              >
                Registration
              </Button>
            )}
            {registrationStatus === "closed" && (
              <Box
                sx={{
                  background: "rgba(128, 128, 128, 0.2)",
                  p: "8px",
                  textAlign: "center",
                  borderRadius:"8px"
                }}
              >
                <Typography variant="body1" sx={{ color: "#808080" }}>
                  Registration is closed!
                </Typography>
              </Box>
            )}
          </>
        )}
      </Stack>

      <Divider />

      <Stack gap="8px" sx={{ p: "16px 24px" }}>
        <Typography variant="h4">About this event</Typography>
        <Typography
          sx={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: eventData?.details }}
        />
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
  eventData: PropTypes.object,
};

EventDrawer.defaultProps = {
  event: null,
};
