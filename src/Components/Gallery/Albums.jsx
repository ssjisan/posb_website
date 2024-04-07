import { Box, Typography, Grid } from "@mui/material";
import { AlbumIcon } from "../../assets/Icons";
import AlbumView from "./AlbumView";
import { useState } from "react";
import GalleryAlbum from "../../assets/GalleryAlbum.json"
export default function Albums() {
    const IconBoxSx = {
        width: "24px",
        height: "24px"
    }
    const PointSx = {
        display: "flex",
        gap: "4px",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "110px"
    }
    const [open, setOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]); // State for selected images

    const handleOpen = (images) => {
        setSelectedImages(images); // Set the selected images array in state
        setOpen(true); // Open the modal
    };
    const handleClose = () => setOpen(false);
    return (
        <Grid container spacing={3}>
            {
                GalleryAlbum.map((data) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={data.id}>
                            <Box sx={{ display: "flex", gap: "24px", flexDirection: "column", p: "24px 12px" }} onClick={() => handleOpen(data.images)}>
                                <Box sx={{ width: "100%", height: "260px", overflow: "hidden", borderRadius: "16px" }}>
                                    <img src={data.thumbnail} alt="" width="100%" height="100%" />
                                </Box>
                                <Box sx={{ display: "flex", gap: "24px", justifyContent: "space-between", alignItems: "flex-start" }}>
                                    <Typography variant='h4'>{data.name}</Typography>
                                    <Box sx={PointSx}>
                                        <Box sx={IconBoxSx}>
                                            <AlbumIcon />
                                        </Box>
                                        <Typography variant='body1' color={"text.secondary"}>{data.images.length} images</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    )
                })
            }
            <AlbumView handleClose={handleClose} open={open} selectedImages={selectedImages} />
        </Grid>
    )
}
