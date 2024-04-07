import TopNav from "./TopNav";
import NavMenu from "./NavMenu";

import { Box } from "@mui/material";

export default function Navbar() {
    // Configure Style Start
    const NavSx = {
        position: "fixed",
        width:"100%",
        zIndex:1000
    }
    // Configure Style End

    return (
        <Box sx={NavSx}>
            <TopNav />
            <NavMenu />
        </Box>
    )
}
