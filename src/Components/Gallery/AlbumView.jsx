import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import toast from "react-hot-toast";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./GalleryStyles.css";
export default function AlbumView() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const isTablet = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) loadAlbum();
  }, [id]);

  const loadAlbum = async () => {
    try {
      const { data } = await axios.get(`/album/${id}`);
      setAlbum(data);
    } catch (err) {
      toast.error("Failed to load album");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <CircularProgress />;
  if (!album) return <Typography>No album found</Typography>;

  const formattedImages = album.images.map((image) => ({
    original: image.src || image,
    thumbnail: image.src || image,
  }));

  return (
    <Box
      sx={{
        height: "100vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        sx={{ p: "12px", borderBottom: "1px solid #e1e1e1ff", mb: 2 }}
      >
        <Button
          sx={{ width: "fit-content" }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Stack sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h4">{album.name}</Typography>
        </Stack>
      </Stack>

      <Box sx={{ flex: 1 }}>
        <ImageGallery
          items={formattedImages}
          showPlayButton={false}
          showFullscreenButton={false}
          thumbnailPosition={isTablet ? "bottom" : "left"}
        />
      </Box>
    </Box>
  );
}
