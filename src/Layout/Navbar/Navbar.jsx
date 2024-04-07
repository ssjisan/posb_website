import TopNav from "./TopNav";
import NavMenu from "./NavMenu";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                const threshold = 200; // Change to your desired threshold value

                if (scrollPosition > threshold) {
                    setBackgroundColor('#fff');
                    setIsScrolled(true);
                } else {
                    setBackgroundColor('transparent');
                    setIsScrolled(false);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setBackgroundColor('#fff');
        }
    }, [location.pathname]);
    
    // Configure Style Start
    const NavSx = {
        position: "fixed",
        width: "100%",
        background: backgroundColor, // Change 200 to your desired threshold
        transition: 'background 0.3s ease-in-out',
        zIndex: 1000
    }
    // Configure Style End

    return (
        <Box sx={NavSx}>
            <TopNav isScrolled={isScrolled}/>
            <NavMenu isScrolled={isScrolled}/>
        </Box>
    )
}
