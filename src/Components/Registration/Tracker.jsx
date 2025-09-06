import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Tracker() {
  const { id } = useParams(); // registrationId from URL
  const [registration, setRegistration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false); // modal state
  const [senderNumber, setSenderNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const res = await axios.get(`/track/${id}`);
        setRegistration(res.data.registration);
      } catch (err) {
        console.error("Failed to fetch registration:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchRegistration();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ pt: "160px", textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 8 }}>Loading registration details...</Typography>
      </Box>
    );
  }

  if (!registration) {
    return (
      <Box sx={{ pt: "160px", textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Registration not found.
        </Typography>
      </Box>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "applied":
        return "inherit";
      case "payment-submitted":
        return "warning";
      case "payment-approved":
        return "success";
      case "payment-rejected":
        return "error";
      default:
        return "inherit";
    }
  };

  const InfoRow = ({ label, value, noBorder }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1.5,
        borderBottom: noBorder ? "none" : "1px solid #e0e0e0",
      }}
    >
      <Typography fontWeight={500} color="text.secondary" fontSize={12}>
        {label}
      </Typography>
      <Typography color="text.primary" fontSize={16}>
        {value || "N/A"}
      </Typography>
    </Box>
  );

  // ✅ Handle payment submission
  const handleSubmitPayment = async () => {
    if (!senderNumber || !transactionId) {
      toast.error("Please provide both Bkash number and Transaction ID.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await axios.put(
        `/registration/${registration.registrationId}/payment`,
        { senderNumber, transactionId }
      );

      toast.success("Payment info submitted successfully!");
      setRegistration(res.data.registration); // ✅ update UI instantly
      setOpen(false);
      setSenderNumber("");
      setTransactionId("");
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Failed to update payment info."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        pt: "160px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          p: 3,
          maxWidth: 380,
          width: "100%",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
          borderRadius: 2,
        }}
      >
        {/* First Row: ID + Status */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Box>
            <Typography fontWeight={500} color="text.secondary" fontSize={12}>
              Registration ID
            </Typography>
            <Typography color="text.primary" fontSize={16}>
              {registration.registrationId}
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography fontWeight={500} color="text.secondary" fontSize={12}>
              Application Status
            </Typography>
            <Chip
              label={registration.status}
              color={getStatusColor(registration.status)}
              size="small"
              sx={{ mt: 0.5 }}
            />
          </Box>
        </Stack>

        {/* Details Stack */}
        <Stack spacing={0}>
          <InfoRow label="Name" value={registration.name} />
          <InfoRow label="Email" value={registration.email} />
          <InfoRow label="Phone" value={registration.phone} />
          <InfoRow label="Designation" value={registration.designation} />
          <InfoRow label="Workplace" value={registration.workplace} />
          <InfoRow label="Course" value={registration.course?.name} />
          {registration.senderNumber && (
            <InfoRow label="Bkash Number" value={registration.senderNumber} />
          )}
          {registration.transactionId && (
            <InfoRow
              label="Transaction ID"
              value={registration.transactionId}
              noBorder
            />
          )}
        </Stack>

        {/* Action: Add Payment Info */}
        {registration.status === "applied" && (
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => setOpen(true)}
          >
            Add Payment Info
          </Button>
        )}
      </Card>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Add Payment Info</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Bkash Number"
              fullWidth
              value={senderNumber}
              onChange={(e) => setSenderNumber(e.target.value)}
            />
            <TextField
              label="Transaction ID"
              fullWidth
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSubmitPayment}
            variant="contained"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Apply"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
