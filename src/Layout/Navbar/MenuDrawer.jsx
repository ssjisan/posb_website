import { useContext } from "react"
import { DataContext } from "../../DataProcessing/DataProcessing"
import { Box, Button, Drawer, Typography, useMediaQuery } from "@mui/material"
import { Close } from "../../Assets/IconSet"
import { services } from "./NavConfig"
import { Link, useLocation } from "react-router-dom"

export default function MenuDrawer() {
    const { toggleDrawer, open, handleDrawerClose, handleScheduleModalOpen } = useContext(DataContext)
    const forBelow676 = useMediaQuery("(max-width:676px)");
    const { pathname } = useLocation();
    const { goToTop } = useContext(DataContext)
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
                    <Close />
                </Box>
            </Box>
            <Box sx={MenuSx}>
                {
                    services.map((data) => {
                        return (
                            <Box sx={{ display: "flex", alignItems: "center" }} key={data.id} onClick={goToTop}>
                                <Link to={data.link} style={linkStyle}>
                                    <Box sx={{ ...MenuButtonSx, backgroundColor: pathname == data.link && "rgba(0, 174, 96, 0.08)", borderRadius: "4px" }} onClick={handleDrawerClose}>
                                        <Typography sx={{
                                            fontSize: forBelow676 && "18px",
                                            color: pathname == data.link && "#00AE60",
                                            fontWeight: pathname == data.link && 500
                                        }}>{data.title}</Typography>
                                    </Box>
                                </Link>
                            </Box>
                        )
                    })
                }
                <Button variant="contained" color="primary" size="small" onClick={handleScheduleModalOpen}>Schedule a Call</Button>
            </Box>
        </Drawer>
    )
}
