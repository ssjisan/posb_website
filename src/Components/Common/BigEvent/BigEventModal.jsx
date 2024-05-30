import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Close } from "../../../assets/Icons";
import axios from "axios";

export default function BigEventModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, 60000); // Close after 60 seconds
      return () => clearTimeout(timer); // Clear timeout if modal is closed manually
    }
  }, [open, onClose]);
  const [lastEvent, setLastEvent] = useState(null);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/events");
      if (data.length > 0) {
        setLastEvent(data[data.length - 1]);
      }
    } catch (err) {
      console.log("Check");
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "60%", // Set the width to 60% of the screen width
          height: "60%", // Set the height to 60% of the screen height
          margin: "auto", // Center the modal horizontally
          mt: "20vh", // Adjust top margin for vertical centering
          position: "relative",
          boxShadow:"none",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <Close size={24} color="red" />
        </IconButton>
        <img
          src={`${process.env.REACT_APP_SERVER_API}/event/image/${lastEvent?._id}`}
          alt="Event Image"
          width="100%" // Set image width to cover the entire container
          height="100%" // Set image height to cover the entire container
          style={{ objectFit: "fit" }} // Ensure the image covers the container without distortion
        />
      </Box>
    </Modal>
  );
}
