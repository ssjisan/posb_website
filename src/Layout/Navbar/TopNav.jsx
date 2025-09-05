import { Box, Typography, useMediaQuery } from "@mui/material";
import { Phone, Whatsapp } from "../../assets/Icons";
import PropTypes from "prop-types"; // Import PropTypes
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

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
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    // Fetch existing contact info
    const fetchContactInfo = async () => {
      try {
        const { data } = await axios.get("/contact-info"); // Fetch data from the endpoint
        const { phoneNumber, whatsapp } = data;
        setPhone(phoneNumber); // Set phone data or empty string if undefined
        setWhatsapp(whatsapp); // Set WhatsApp data or empty string if undefined
      } catch (err) {
        toast.error("Failed to fetch contact information"); // Show error toast if fetching fails
      }
    };

    fetchContactInfo(); // Call the fetch function
  }, []); // Empty dependency array ensures this effect runs once on mount


  return (
    <>
      {!forBelow767 && (
        <Box sx={NavSx}>
          <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a
              aria-label="Chat on WhatsApp"
              href={`https://wa.me/+${whatsapp}`}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Whatsapp color={"#FFF"} size="20px" />
                <Typography sx={{ color: "#FFF" }}>+{whatsapp}</Typography>
              </Box>
            </a>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <a
                aria-label="Call on Phone"
                href={`tel:+${phone}`}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Phone size="20px" color={"#FFF"} />
                  <Typography sx={{ color: "#FFF" }}>+{phone}</Typography>
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
