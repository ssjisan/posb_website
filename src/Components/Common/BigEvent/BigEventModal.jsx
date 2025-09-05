import { Dialog, DialogContent, IconButton, Box } from "@mui/material";
import { useContext } from "react";
import PropTypes from "prop-types";
import { Close } from "../../../assets/Icons";
import { DataContext } from "../../../DataProcessing/DataProcessing";

export default function BigEventModal() {
  const { latestEvent, handleCloseModal, isModalOpen } = useContext(DataContext);

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCloseModal}
      maxWidth="lg"
      PaperProps={{
        style: {
          width: "auto",
          height: "auto",
          maxWidth: "90%",
          maxHeight: "90%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <DialogContent
        dividers
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {latestEvent && (
          <img
            src={latestEvent?.coverPhoto?.url ? latestEvent?.coverPhoto?.url : "/placeholder.png"}
            alt="Event Image"
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 20,
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
            sx={{
              border: "1px solid black",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

BigEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
