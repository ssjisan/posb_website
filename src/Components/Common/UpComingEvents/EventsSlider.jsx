import { Box, Typography, Skeleton } from "@mui/material";
import Slider from "react-slick";
import { Calender, Clock, Location } from "../../../assets/Icons";
import { format } from "date-fns";
import PropTypes from "prop-types";

export default function EventsSlider({
  loading,
  setActiveIndex,
  events,
  activeIndex,
  error
}) {
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

  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 898,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };


  return (
    <div className="slider-container">
      {loading ? (
        <Slider {...settings}>
          {Array.from(new Array(3)).map((_, index) => (
            <Box
              sx={{
                display: "flex !important",
                gap: "24px",
                flexDirection: "column",
                p: "24px 12px",
              }}
              key={index}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height="240px"
                sx={{ borderRadius: "16px" }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <Skeleton variant="text" width="80%" height="32px" />
                <Box sx={DetailsSx}>
                  <Box sx={{ ...PointSx, alignItems: "center" }}>
                    <Skeleton variant="circular" width="24px" height="24px" />
                    <Skeleton variant="text" width="60%" />
                  </Box>
                  <Box sx={{ ...PointSx, alignItems: "center" }}>
                    <Skeleton variant="circular" width="24px" height="24px" />
                    <Skeleton variant="text" width="60%" />
                  </Box>
                  <Box sx={PointSx}>
                    <Skeleton variant="circular" width="24px" height="24px" />
                    <Skeleton variant="text" width="80%" />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      ) : error ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "240px",
          }}
        >
          <Typography variant="h6" sx={{color:"#919EAB", fontStyle:"italic", textAlign:"center"}}>
            Event data couldn&apos;t load properly
            <br/>Try again later.
          </Typography>
        </Box>
      ) : (
        <Slider {...settings}>
          {events?.map((data) => (
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
                <img
                  src={`https://posb-server.vercel.app/event/image/${data._id}`}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
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
              </Box>
            </Box>
          ))}
        </Slider>
      )}
      <Box
        sx={{
          mt: "64px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {events?.map((data, index) => (
          <Box
            key={index}
            sx={{
              height: "10px",
              width: index === activeIndex ? "64px" : "10px",
              background: index === activeIndex ? "#2C2C2C" : "#D9D9D9",
              borderRadius: "100px",
            }}
          ></Box>
        ))}
      </Box>
    </div>
  );
}

EventsSlider.propTypes = {
  loading: PropTypes.bool.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  error:PropTypes.string.isRequired
};
