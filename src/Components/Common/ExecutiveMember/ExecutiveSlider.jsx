import { Box, Typography, IconButton, Skeleton } from "@mui/material";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { LeftArrow, RightArrow } from "../../../assets/Icons";

export default function ExecutiveSlider() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const [committees, setCommittees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadCommittees();
  }, []);

  const loadCommittees = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/executive-committee`
      );

      setCommittees([data[0]]);
      setLoading(false);
      setError(false);
    } catch (error) {
      toast.error("Failed to load committees");
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="slider-container">
      {loading ? (
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {Array.from(new Array(3)).map((_, index) => (
            <Box
              sx={{
                display: "flex !important",
                gap: "24px",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={index}
            >
              <Box
                sx={{
                  width: "140px",
                  height: "140px",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <Skeleton variant="rectangular" width="100%" height="100%" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Skeleton variant="text" width={100} height={30} />
                <Skeleton variant="text" width={80} height={20} />
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
            height: "200px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#919EAB", fontStyle: "italic", textAlign: "center" }}
          >
            Committee data could not load properly.
            <br />
            Try Again Later.
          </Typography>
        </Box>
      ) : (
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {committees.map((committee) => {
            return committee.members.map((memberData) => {
              const { member, position } = memberData;
              return (
                <Box
                  sx={{
                    display: "flex !important",
                    gap: "24px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={member._id}
                >
                  <Box
                    sx={{
                      width: "140px",
                      height: "140px",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={
                        member?.profilePhoto?.length
                          ? member.profilePhoto[0]?.url
                          : "https://res.cloudinary.com/dzdjgu1vc/image/upload/v1730688763/posb/members/b2e5qajsnjqjtlel2xx3.png"
                      }
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5">{member.name}</Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "300 !important" }}
                    >
                      {position}
                    </Typography>
                  </Box>
                </Box>
              );
            });
          })}
        </Slider>
      )}
      <Box
        sx={{
          mt: "64px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={previous}>
          <LeftArrow />
        </IconButton>
        <IconButton onClick={next}>
          <RightArrow />
        </IconButton>
      </Box>
    </div>
  );
}
