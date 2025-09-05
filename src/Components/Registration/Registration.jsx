import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Registration() {
  const navigate = useNavigate();
  const { id } = useParams(); // eventId from route params
  console.log("res.data", id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    workplace: "",
    course: "",
  });

  // Fetch event details on component mount
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/events/${id}`); // your API endpoint
        const eventData = res.data;
        console.log("res.data", res.data);

        // Populate course name
        setFormData((prev) => ({ ...prev, course: eventData.name }));
      } catch (err) {
        console.error("Failed to fetch event data:", err);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...formData, course: id }; // id from useParams = event _id
      const res = await axios.post("/registrations", payload);
      console.log("Registration success:", res.data);
      toast.success("Registration successful!");
      navigate("/registration-tracker"); // optional
    } catch (err) {
      console.error(err);
      toast.error("Failed to register. Please try again.");
    }
  };

  return (
    <Box>
      {/* Header */}
      <Stack
        sx={{ width: "100%", borderBottom: "1px solid #c2c2c2", p: "12px" }}
        flexDirection="row"
        alignItems="center"
      >
        <Button sx={{ width: "fit-content" }} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Stack sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h4">Registration</Typography>
        </Stack>
      </Stack>

      {/* Centered Form */}
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
          <TextField
            size="small"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            size="small"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            size="small"
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            size="small"
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
          <TextField
            size="small"
            label="Workplace"
            name="workplace"
            value={formData.workplace}
            onChange={handleChange}
          />
          <TextField
            size="small"
            label="Course Name"
            name="course"
            value={formData.course}
            onChange={handleChange}
            disabled // optional: make it read-only
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
