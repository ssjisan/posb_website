import { Box, Typography, useMediaQuery } from "@mui/material";
import { Phone, Whatsapp } from "../../assets/Icons";
import PropTypes from "prop-types"; // Import PropTypes

export default function TopNav() {
  const forBelow767 = useMediaQuery("(max-width:767px)");

  const NavSx = {
    backgroundColor: "#2B2B2B",
    transition: "backgroundColor 0.5s ease-in-out",
    padding: forBelow767 ? "4px 16px" : "4px 24px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottom: "1px solid rgba(145,142,175,0.32)",
  };

  return (
    <>
      {!forBelow767 && (
        <Box sx={NavSx}>
          <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/+8801534919618"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Whatsapp color={"#FFF"} size="20px" />
                <Typography sx={{ color: "#FFF" }}>+8801534919618</Typography>
              </Box>
            </a>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <a
                aria-label="Call on Phone"
                href="tel:+8801740559555"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Phone size="20px" color={"#FFF"} />
                  <Typography sx={{ color: "#FFF" }}>+8801740559555</Typography>
                </Box>
              </a>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

TopNav.propTypes = {
  isScrolled: PropTypes.bool.isRequired, // PropTypes validation for isScrolled prop
};
