import { Box, Typography, useMediaQuery } from "@mui/material"
import { main } from "./NavConfig"
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line
export default function NavMenu({ isScrolled }) {
    const { pathname } = useLocation();

    // eslint-disable-next-line
    const forBelow767 = useMediaQuery("(max-width:767px)");
    // eslint-disable-next-line
    const forBelow1100 = useMediaQuery("(max-width:1100px)");
    // Configure Style Start

    const linkStyle = {
        textDecoration: "none",
        color: "#031E21"
    };
    const NavSx = {
        padding: "16px 24px",
        display: forBelow767 ? "none" : "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    }
    const MenuListSx = {
        display: "flex",
        alignItems: "center",
        gap: "8px"
    }
    const MenuButtonSx = {
        display: "flex",
        height: "40px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
    }

    // Configure Style End

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <Box sx={NavSx}>
            <Box sx={{ display: "flex", gap: "16px" }}>
                {
                    main.map((data) => {
                        return (
                            <Box sx={MenuListSx} key={data.id} onClick={goToTop}>
                                <Link to={data.link} style={linkStyle}>
                                    <Box sx={{
                                        ...MenuButtonSx,
                                        borderBottom: pathname === "/" && data.link === pathname ? (isScrolled ? "2px solid orange" : "2px solid #fff") : data.link === pathname ? "2px solid orange" : "2px solid transparent"
                                    }}>
                                        <Typography sx={{
                                            color: pathname === "/" ? (isScrolled ? pathname === data.link ? "#F4866F" : "#000" : "#FFF") : (pathname === data.link ? "#F4866F" : "#000")
                                        }}
                                            variant="subtitle2">{data.title}</Typography>
                                    </Box>
                                </Link>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
