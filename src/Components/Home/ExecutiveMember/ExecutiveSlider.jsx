import { Box, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import { useRef } from "react";
import MemberData from "../../../assets/MemberList.json";
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
            <Slider {...settings} ref={slider => {
                sliderRef = slider;
            }}>
                {
                    MemberData.map((data) => {
                        return (
                            <Box sx={{ display: "flex !important", gap: "24px", flexDirection: "column", alignItems: "center"}} key={data.id}>
                                <Box sx={{ width: "140px", height: "140px", overflow: "hidden", borderRadius: "200px" }}>
                                    <img src={data.imgUrl} alt="" width="100%" height="100%" />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                                    <Typography variant="h5">{data.name}</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: "300 !important" }}>{data.position}</Typography>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Slider>
            <Box sx={{ mt: "64px", width: "100%", display: "flex", justifyContent: "center" }}>
                <IconButton onClick={previous}>
                    <LeftArrow />
                </IconButton>
                <IconButton onClick={next}>
                    <RightArrow />
                </IconButton>
            </Box>
        </div>
    )
}
