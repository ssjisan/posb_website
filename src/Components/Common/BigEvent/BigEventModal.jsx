import {
  Dialog,
  Skeleton,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

export default function BigEventModal({ open, onClose }) {
  const imgRef = useRef(null); // Ref to access the image element

  const [lastEvent, setLastEvent] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading

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
    } finally {
      setLoading(false); // Set loading to false after data is loaded
    }
  };

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = () => {
        const imgWidth = imgRef.current.offsetWidth;
        const imgHeight = imgRef.current.offsetHeight;
        const containerWidth = imgRef.current.parentNode.offsetWidth;
        const containerHeight = imgRef.current.parentNode.offsetHeight;

        if (imgWidth > containerWidth || imgHeight > containerHeight) {
          // Calculate scale factor to fit image within container with slight zoom
          const scaleFactor = Math.min(
            containerWidth / imgWidth,
            containerHeight / imgHeight
          ) * 2; // Slight zoom factor

          imgRef.current.style.transform = `scale(${scaleFactor})`;
        }
      };
    }
  }, [lastEvent]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      ) : (
        <img
          ref={imgRef}
          src={`https://posb-server.vercel.app/event/image/${lastEvent?._id}`}
          alt="Event Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out", // Add transition for smooth zoom effect
          }}
        />
      )}
    </Dialog>
  );
}

BigEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
