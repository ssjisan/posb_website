import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useState } from "react";
import NewsNotice from "../../../assets/NewsNotice.json";

export default function NewsSlider() {

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
                breakpoint: 600,
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
    return (
        <div className="slider-container">
            <Slider {...settings} >
                {
                    NewsNotice.map((data) => {
                        return (
                            <Box sx={{ display: "flex !important", gap: "16px", p: "0px 24px", height: "86px" }} key={data.id}>
                                <Box sx={{ width: "48px", height: "48px", background: "#114285", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ color: "white", fontSize: "24px !important", fontWeight: "400 !important", lineHeight: "18px" }} >{data.date.split(' ')[0]}</Typography>
                                    <Typography sx={{ color: "white", fontSize: "14px !important", fontWeight: "300 !important", lineHeight: "12px" }} >{data.date.split(' ')[1]}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4">{data.name}</Typography>
                                    <Typography variant="body1" color="text.secondary">{data.date}</Typography>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Slider>
            <Box sx={{ mt: "64px", width: "100%", display: "flex", justifyContent: "center", gap: "8px" }}>
                {
                    NewsNotice.map((data, index) => (
                        <Box key={index} sx={{ height: "10px", width: index === activeIndex ? "64px" : "10px", background: index === activeIndex ? "#2C2C2C" : "#D9D9D9", borderRadius: "100px" }}></Box>
                    ))
                }
            </Box>
        </div>
    )
}
