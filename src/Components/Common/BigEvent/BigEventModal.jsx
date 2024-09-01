import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { Close } from "../../../assets/Icons";

export default function BigEventModal({ open, onClose }) {
  const imgRef = useRef(null); // Ref to access the image element
  const [lastEvent, setLastEvent] = useState(null);
  // eslint-disable-next-line
  const [imageLoaded, setImageLoaded] = useState(false); // State for image loaded
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open

  useEffect(() => {
    if (open) {
      loadEvents();
    }
  }, [open]);

  const loadEvents = async () => {
    try {
      const { data } = await axios.get(
        "https://posb-server.vercel.app/events"
      );
      if (data.length > 0) {
        setLastEvent(data[0]);
      }
    } catch (err) {
      toast.error("Event Loading Problem.");
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsModalOpen(true); // Open modal when image is loaded
  };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose(); // Call onClose prop to notify parent component
  };

  return (
    <>
      <img
        ref={imgRef}
        src={`https://posb-server.vercel.app/event/image/${lastEvent?._id}`}
        alt="Event Image"
        onLoad={handleImageLoad}
        style={{ display: 'none' }} // Hide the image element
      />
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          style: {
            width: 'auto',
            height: 'auto',
            maxWidth: '90%',
            maxHeight: '90%',
            overflow: 'hidden', // Ensure no scrolling
          },
        }}
      >
        <DialogContent
          dividers
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            position: 'relative', // Ensure the close button can be positioned relative to this container
          }}
        >
          <img
            ref={imgRef}
            src={`https://posb-server.vercel.app/event/image/${lastEvent?._id}`}
            alt="Event Image"
            style={{
              objectFit: "contain", // Ensure image fits within container
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 20,
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                border: '1px solid black', // Add black border

                backgroundColor: 'white', // Set button background to white
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Slightly darker on hover
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

BigEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
