import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Registration() {
  const navigate = useNavigate();
  const { id } = useParams(); // eventId from route params

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    workplace: "",
    senderNumber: "",
    transactionId: "",
  });

  const [course, setCourse] = useState({
    id: id,
    name: "",
  });

  // Fetch event details
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/events/${id}`);
        const eventData = res.data;
        setCourse({ id: eventData._id, name: eventData.name });
      } catch (err) {
        console.error("Failed to fetch event data:", err);
      }
    };

    if (id) fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Submitting registration...");
    if (
      (formData.senderNumber && !formData.transactionId) ||
      (!formData.senderNumber && formData.transactionId)
    ) {
      toast.dismiss();
      toast.error(
        "Please provide both Bkash number and Transaction ID together."
      );
      return;
    }

    try {
      const payload = { ...formData, course: course.id }; // send ObjectId
      const res = await axios.post("/registrations", payload);
      const registrationId = res.data.registrationId;
      toast.success("Registration successful!", { id: toastId });
      navigate(`/registration-tracker/${registrationId}`, {
        state: { registrationId },
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to register. Please try again.", { id: toastId });
    }
  };

  return (
    <Box>
      {/* Header */}
      <Stack
        sx={{ borderBottom: "1px solid #c2c2c2", p: "12px" }}
        direction="row"
        alignItems="center"
      >
        <Button sx={{ width: "fit-content" }} href="/">
          Back
        </Button>
        <Typography
          variant="h4"
          sx={{ flex: 1, textAlign: "center", mr: "48px" }}
        >
          Registration
        </Typography>
      </Stack>

      {/* Form */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: 400,
            mt: 4,
            p: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          <TextField label="Course Name" value={course.name} disabled />
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
          <TextField
            label="Current Workplace"
            name="workplace"
            value={formData.workplace}
            onChange={handleChange}
          />
          <TextField
            label="Payment from (Bkash number)"
            name="senderNumber"
            value={formData.senderNumber}
            onChange={handleChange}
          />
          <TextField
            label="Transaction Number (TrxID)"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
