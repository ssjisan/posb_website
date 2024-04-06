import { Box, Typography, useMediaQuery } from "@mui/material";
import { LogoWhite } from "../../assets/LogoWhite";
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
        borderBottom: "1px solid #FFF",
    }
    return (
        <Box sx={NavSx}>
            <Box>
                {forBelow475 ? <Symbolic /> : <LogoWhite />}
            </Box>
            {
                forBelow767 ? <Box>
                    <Menu />
                </Box> :
                    <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Whatsapp />
                            <Typography sx={{ color: "#fff" }}>+8801675893967</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Phone />
                            <Typography sx={{ color: "#fff" }}>+8801675893967</Typography>
                        </Box>
                    </Box>
            }
        </Box>
    )
}
