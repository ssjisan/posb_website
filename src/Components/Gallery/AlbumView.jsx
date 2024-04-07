import ImageGallery from "react-image-gallery";
import { Box, Modal } from '@mui/material';
import "react-image-gallery/styles/css/image-gallery.css";

export default function AlbumView({ handleClose, open, selectedImages }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        p: 4,
        border: '2px solid transparent',
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <ImageGallery items={selectedImages} />
            </Box>
        </Modal>
    )
}
