import ImageGallery from "react-image-gallery";
import { Box, Modal, useMediaQuery } from '@mui/material';
import "react-image-gallery/styles/css/image-gallery.css";

//eslint-disable-next-line
export default function AlbumView({ handleClose, open, selectedImages }) {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: forBelow767 ? "100%" : "50%",
        p: 4,
        border: '0px solid transparent',
        boxShadow: 0,
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            BackdropProps={{
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                },
            }}
        >
            <Box sx={style}>
                <ImageGallery items={selectedImages} />
            </Box>
        </Modal>
    )
}
