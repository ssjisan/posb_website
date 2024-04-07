import { Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { Logo } from "../../assets/Logo";
import { Menu, Phone, Whatsapp } from "../../assets/Icons";
import { Symbolic } from "../../assets/Symbolic";

export default function TopNav() {
    const forBelow475 = useMediaQuery("(max-width:475px)");
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const NavSx = {
        padding: forBelow767 ? "4px 16px" : "4px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(145,142,175,0.32)",
    }
    return (
        <Box sx={NavSx}>
            <Box>
                {forBelow475 ? <Symbolic /> : <Logo />}
            </Box>
            {
                forBelow767 ?
                    <IconButton>
                        <Menu color="#0D0A25" />
                    </IconButton> :
                    <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Whatsapp color="#0D0A25" />
                            <Typography sx={{ color: "#0D0A25" }}>+8801675893967</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Phone color="#0D0A25" />
                            <Typography sx={{ color: "#0D0A25" }}>+8801675893967</Typography>
                        </Box>
                    </Box>
            }
        </Box>
    )
}
