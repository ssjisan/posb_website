import { Box, IconButton, Modal, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Close } from "../../../assets/Icons";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

export default function BigEventModal({ open, onClose }) {
  const [lastEvent, setLastEvent] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, 60000); // Close after 60 seconds
      return () => clearTimeout(timer); // Clear timeout if modal is closed manually
    }
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      loadEvents();
    }
  }, [open]);

  const loadEvents = async () => {
    try {
      const { data } = await axios.get("https://posb-server.vercel.app/events");
      if (data.length > 0) {
        setLastEvent(data[0]);
      }
    } catch (err) {
      toast.error("Event Loading Problem.");
    } finally {
      setLoading(false); // Set loading to false after data is loaded
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
          boxShadow: "none",
          backgroundColor:"#fff"
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <Close size={24} color="red" />
        </IconButton>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        ) : (
          <img
            src={`https://posb-server.vercel.app/event/image/${lastEvent?._id}`}
            alt="Event Image"
            width="100%" // Set image width to cover the entire container
            height="100%" // Set image height to cover the entire container
            style={{ objectFit: "cover" }} // Ensure the image covers the container without distortion
          />
        )}
      </Box>
    </Modal>
  );
}

BigEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};