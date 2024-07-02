import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { main } from "./NavConfig";
import { Link, useLocation } from "react-router-dom";
import { Symbolic } from "../../assets/Symbolic";
import { Logo } from "../../assets/Logo";
import { useState } from "react";
import { Menu } from "../../assets/Icons";
import MenuDrawer from "./MenuDrawer";
// eslint-disable-next-line
export default function NavMenu({ isScrolled }) {
  const { pathname } = useLocation();

  // eslint-disable-next-line
  const forBelow767 = useMediaQuery("(max-width:767px)");
  // eslint-disable-next-line
  const forBelow475 = useMediaQuery("(max-width:475px)");
  const forBelow899 = useMediaQuery("(max-width:899px)");

  // Configure Style Start
  const linkStyle = {
    textDecoration: "none",
    color: "#031E21",
  };
  const NavSx = {
    backgroundColor: isScrolled ? "#fff" : "transparent",
    padding: isScrolled ? "8px 24px" : "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.5s ease-in-out, padding 0.5s ease-in-out",
    borderBottom: isScrolled && "1px solid rgba(145,142,175,0.32)",
    backdropFilter: isScrolled ? "blur(8px)" : "none",
  };
  const MenuListSx = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };
  const MenuButtonSx = {
    display: "flex",
    height: "40px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
  };

  // Configure Style End

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        {forBelow899 ? (
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
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
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Box
              sx={{
                width: isScrolled ? "280px" : "330px",
                height: isScrolled ? "40px" : "48px",
                transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
              }}
            >
              <Logo
                colorOne={
                  pathname === "/"
                    ? isScrolled
                      ? "#114285"
                      : "#fff"
                    : "#114285"
                }
                colorTwo={
                  pathname === "/"
                    ? isScrolled
                      ? "#151313"
                      : "#fff"
                    : "#151313"
                }
              />
            </Box>
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
        <Box sx={{ display: "flex", gap: "16px" }}>
          {main.map((data) => {
            return (
              <Box sx={MenuListSx} key={data.id} onClick={goToTop}>
                <Link to={data.link} style={linkStyle}>
                  <Box
                    sx={{
                      ...MenuButtonSx,
                      borderBottom:
                        pathname === "/" && data.link === pathname
                          ? isScrolled
                            ? "2px solid orange"
                            : "2px solid #fff"
                          : data.link === pathname
                          ? "2px solid orange"
                          : "2px solid transparent",
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          pathname === "/"
                            ? isScrolled
                              ? pathname === data.link
                                ? "#F4866F"
                                : "#000"
                              : "#FFF"
                            : pathname === data.link
                            ? "#F4866F"
                            : "#000",
                      }}
                      variant="subtitle2"
                    >
                      {data.title}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            );
          })}
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
