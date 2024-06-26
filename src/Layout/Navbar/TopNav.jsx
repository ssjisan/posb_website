import { Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { Logo } from "../../assets/Logo";
import { Menu, Phone, Whatsapp } from "../../assets/Icons";
import { Symbolic } from "../../assets/Symbolic";
import { Link, useLocation } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default function TopNav({ isScrolled }) {
  const { pathname } = useLocation();

  const forBelow475 = useMediaQuery("(max-width:475px)");
  const forBelow767 = useMediaQuery("(max-width:767px)");

  const NavSx = {
    padding: forBelow767 ? "4px 16px" : "4px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(145,142,175,0.32)",
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={NavSx}>
      <Box>
        {forBelow475 ? (
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Symbolic
              colorOne={
                pathname === "/" ? (isScrolled ? "#114285" : "#fff") : "#114285"
              }
              colorTwo={
                pathname === "/" ? (isScrolled ? "#151313" : "#fff") : "#151313"
              }
            />
          </Link>
        ) : (
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo
              colorOne={
                pathname === "/" ? (isScrolled ? "#114285" : "#fff") : "#114285"
              }
              colorTwo={
                pathname === "/" ? (isScrolled ? "#151313" : "#fff") : "#151313"
              }
            />
          </Link>
        )}
      </Box>
      {forBelow767 ? (
        <IconButton onClick={toggleDrawer}>
          <Menu
            color={
              pathname === "/" ? (isScrolled ? "#0D0A25" : "#fff") : "#0D0A25"
            }
          />
        </IconButton>
      ) : (
        <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+8801787863140"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Whatsapp
                color={
                  pathname === "/"
                    ? isScrolled
                      ? "#0D0A25"
                      : "#fff"
                    : "#0D0A25"
                }
                size="24px"
              />
              <Typography
                sx={{
                  color:
                    pathname === "/"
                      ? isScrolled
                        ? "#0D0A25"
                        : "#fff"
                      : "#0D0A25",
                }}
              >
                +8801675893967
              </Typography>
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
                <Phone
                  color={
                    pathname === "/"
                      ? isScrolled
                        ? "#0D0A25"
                        : "#fff"
                      : "#0D0A25"
                  }
                />
                <Typography
                  sx={{
                    color:
                      pathname === "/"
                        ? isScrolled
                          ? "#0D0A25"
                          : "#fff"
                        : "#0D0A25",
                  }}
                >
                  +8801740559555
                </Typography>
              </Box>
            </a>
          </Box>
        </Box>
      )}
      <MenuDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
}

TopNav.propTypes = {
  isScrolled: PropTypes.bool.isRequired, // PropTypes validation for isScrolled prop
};