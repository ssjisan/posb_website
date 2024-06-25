import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Calender, Clock, Location } from "../../../assets/Icons";
import axios from "axios";
import toast from "react-hot-toast";

export default function EventsSlider() {
    const DetailsSx = {
        width: "100%",
        maxWidth: "450px",
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
        gap: "16px",
    }
    const [activeIndex, setActiveIndex] = useState(0); // Initialize active index state

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
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };

    // Load Event
    const [events, setEvents] = useState([]);
    useEffect(() => {
        loadEvents();
      }, []);
      const loadEvents = async () => {
        try {
          const { data } = await axios.get(`https://posb-server.vercel.app/events`);
          setEvents(data);
        } catch (err) {
          toast.error("Event loading problem");
        }
      };
      console.log(events);
    return (
        <div className="slider-container">
            <Slider {...settings} >
                {
                    events?.map((data) => {
                        return (
                            <Box sx={{ display: "flex !important", gap: "24px", flexDirection: "column", p: "24px 12px" }} key={data.id}>
                                <Box sx={{ width: "100%", height: "240px", overflow: "hidden", borderRadius: "16px" }}>
                                    <img src={`https://posb-server.vercel.app/event/image/${data._id}`} alt="" width="100%" height="100%" style={{objectFit:"cover"}}/>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                    <Typography variant='h4'>POSBCON 2024</Typography>
                                    <Box sx={DetailsSx}>
                                        <Box sx={{ ...PointSx, alignItems: "center" }}>
                                            <Box sx={IconBoxSx}>
                                                <Calender />
                                            </Box>
                                            <Typography variant='body1'>24-25th February, 2024.</Typography>
                                        </Box>
                                        <Box sx={{ ...PointSx, alignItems: "center" }}>
                                            <Box sx={IconBoxSx}>
                                                <Clock />
                                            </Box>
                                            <Typography variant='body1'>05:00 PM - 07:00 PM.</Typography>
                                        </Box>
                                        <Box sx={PointSx}>
                                            <Box sx={IconBoxSx}>
                                                <Location />
                                            </Box>
                                            <Typography variant='body1'>Health and Hope Hospital 152/1/H, Green road, Panthopath(Green road Panthopath junction), Dhaka-1205.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Slider>
            <Box sx={{ mt: "64px", width: "100%", display: "flex", justifyContent: "center", gap: "8px" }}>
                {
                    events?.map((data, index) => (
                        <Box key={index} sx={{ height: "10px", width: index === activeIndex ? "64px" : "10px", background: index === activeIndex ? "#2C2C2C" : "#D9D9D9", borderRadius: "100px" }}></Box>
                    ))
                }
            </Box>
        </div>
    )
}
