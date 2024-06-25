import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize active index state
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    loadNotices();
  }, []);
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
  
  const loadNotices = async () => {
    try {
      const { data } = await axios.get(
        "https://posb-server.vercel.app/notices"
      );
      setNotices(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="slider-container" >
      <Slider {...settings}>
        {notices.map((data) => {
          const isoDate = data.createdAt;
          const date = new Date(isoDate);
          const day = date.getDate();
          const month = date.toLocaleString("en-US", { month: "short" });

          return (
            <Link
              key={data._id}
              href={data.link}
              target="_blank"
            >
              <Box
                sx={{
                  display: "flex !important",
                  gap: "16px",
                  p: "0px 24px",
                  height: "86px",
                  textDecoration:"none !important",
                }}
                
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    background: "#114285",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "24px !important",
                      fontWeight: "400 !important",
                      lineHeight: "18px",
                    }}
                  >
                    {day}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "14px !important",
                      fontWeight: "300 !important",
                      lineHeight: "12px",
                    }}
                  >
                    {month}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4">{data.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {data.description}
                  </Typography>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Slider>
      <Box
        sx={{
          mt: "64px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {notices.map((data, index) => (
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
