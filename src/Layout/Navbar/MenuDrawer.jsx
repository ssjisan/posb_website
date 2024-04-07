import { Box, Drawer, Typography, useMediaQuery } from "@mui/material"
import { main } from "./NavConfig"
import { Link, useLocation } from "react-router-dom"

//eslint-disable-next-line
export default function MenuDrawer({ toggleDrawer, handleDrawerClose, open }) {
    //eslint-disable-next-line
    const forBelow676 = useMediaQuery("(max-width:676px)");
    const { pathname } = useLocation();
    // Configure Style Start

    const linkStyle = {
        textDecoration: "none",
        color: "#031E21"
    };
    const DrawerSx = {
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
        },
    }
    const TopBarSx = {
        display: "flex",
        justifyContent: "flex-end",
        padding: "12px 16px"
    }
    const CloseButtonSx = {
        borderRadius: "8px",
        background: "rgba(145, 142, 175, 0.16)",
        p: "4px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const MenuSx = {
        display: "flex",
        gap: "16px",
        flexDirection: "column",
        alignItems: "center",
        mt: "40px"
    }
    const MenuButtonSx = {
        display: "flex",
        height: "40px",
        padding: "8px 16px",
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
        <Drawer
            variant="temporary"
            anchor="right"
            open={open}
            onClose={toggleDrawer}
            sx={DrawerSx}
        >
            <Box sx={TopBarSx}>
                <Box sx={CloseButtonSx} onClick={handleDrawerClose}>
                    C
                </Box>
            </Box>
            <Box sx={MenuSx}>
                {
                    main.map((data) => {
                        return (
                            <Box key={data.id} onClick={goToTop}>
                                <Link to={data.link} style={linkStyle}>
                                    <Box sx={{ ...MenuButtonSx, borderBottom: pathname === data.link ? "2px solid #0D0A25" : "2px solid transparent" }}>
                                        <Typography variant="subtitle2">{data.title}</Typography>
                                    </Box>
                                </Link>
                            </Box>
                        )
                    })
                }
            </Box>
        </Drawer>
    )
}
