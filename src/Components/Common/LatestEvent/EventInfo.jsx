import {
  Box,
  Typography,
  useMediaQuery,
  Skeleton,
  Button,
  Stack,
} from "@mui/material";
import { Calender, Clock, Location } from "../../../assets/Icons";
import { format } from "date-fns";
import PropTypes from "prop-types";

export default function EventInfo({ lastEvent, loading, onEventDetailsClick }) {
  const forBelow599 = useMediaQuery("(max-width:599px)");
  const isLinkExpired = lastEvent?.linkExpireDate
    ? new Date() > new Date(lastEvent.linkExpireDate)
    : true; // Default to `true` if `linkExpireDate` is not provided

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
    <Box sx={{ mt: !forBelow599 && "40px" }}>
      {loading || !lastEvent ? (
        <>
          <Skeleton variant="text" width={200} height={50} />
          <Box sx={DetailsSx}>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Skeleton variant="circular" width={24} height={24} />
              </Box>
              <Skeleton variant="text" width={150} height={30} />
            </Box>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Skeleton variant="circular" width={24} height={24} />
              </Box>
              <Skeleton variant="text" width={150} height={30} />
            </Box>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Skeleton variant="circular" width={24} height={24} />
              </Box>
              <Skeleton variant="text" width={150} height={30} />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h3">{lastEvent.name}</Typography>
          <Box sx={DetailsSx}>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Calender />
              </Box>
              <Typography variant="h6">
                {format(new Date(lastEvent.eventDate), "dd/MM/yyyy")}
              </Typography>
            </Box>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Clock />
              </Box>
              <Typography variant="h6">
                {format(new Date(lastEvent.eventTime), "hh:mm a")}
              </Typography>
            </Box>
            <Box sx={PointSx}>
              <Box sx={IconBoxSx}>
                <Location />
              </Box>
              <Typography variant="h6">{lastEvent.location}</Typography>
            </Box>
            <Stack
              direction="row"
              gap="16px"
              sx={{ mt: "24px" }}
              alignItems="center"
            >
              <Button variant="outlined" onClick={onEventDetailsClick}>
                Event Details
              </Button>
              {lastEvent?.registrationLink ? (
                isLinkExpired ? (
                  <Typography variant="body1" color="error">
                    Registration is Closed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    href={lastEvent?.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Registration
                  </Button>
                )
              ) : null}
            </Stack>
          </Box>
        </>
      )}
    </Box>
  );
}

EventInfo.propTypes = {
  lastEvent: PropTypes.shape({
    name: PropTypes.string,
    eventDate: PropTypes.string,
    eventTime: PropTypes.string,
    location: PropTypes.string,
    registrationLink: PropTypes.string,
    linkExpire: PropTypes.bool,
    linkExpireDate: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  onEventDetailsClick: PropTypes.func.isRequired, // Prop for the event details click handler
};
