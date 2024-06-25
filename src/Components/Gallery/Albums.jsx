import { Box, Typography, Grid } from "@mui/material";
import { AlbumIcon } from "../../assets/Icons";
import AlbumView from "./AlbumView";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Albums() {
  const IconBoxSx = {
    width: "24px",
    height: "24px",
  };

  const PointSx = {
    display: "flex",
    gap: "4px",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "110px",
  };

  const [albums, setAlbums] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]); // State for selected images

  const handleOpen = (images) => {
    if (images && images.length > 0) {
      const formattedImages = images.map((image) => ({
        original: image.url,
        thumbnail: image.url,
      }));
      setSelectedImages(formattedImages); // Set the selected images array in state
      setOpen(true); // Open the modal
    } else {
      toast.error("No images found in this album");
    }
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    try {
      const { data } = await axios.get("https://posb-server.vercel.app/albums");
      setAlbums(data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Grid container spacing={3}>
      {albums.map((data) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={data._id}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              flexDirection: "column",
              p: "24px 12px",
            }}
            onClick={() => handleOpen(data.images)}
          >
            <Box
              sx={{
                width: "100%",
                height: "260px",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              {data.images && data.images.length > 0 ? (
                <img
                  src={data.images[0].url}
                  alt={data.name}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Typography>No Image Available</Typography>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h4">{data.name}</Typography>
              <Box sx={PointSx}>
                <Box sx={IconBoxSx}>
                  <AlbumIcon />
                </Box>
                <Typography variant="body1" color={"text.secondary"}>
                  {data.images ? `${data.images.length} images` : "No images"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
      <AlbumView
        handleClose={handleClose}
        open={open}
        galleryImages={selectedImages}
      />
    </Grid>
  );
}
