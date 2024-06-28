import { Box, Grid, Typography, TextField, Button, useMediaQuery, Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
    const forBelow767 = useMediaQuery("(max-width:767px)");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Front-end validation
        if (!formData.name.trim()) {
            toast.error("Name is required");
            return;
        }
        if (!formData.email.trim()) {
            toast.error("Email is required");
            return;
        }

        try {
            const response = await axios.post('https://posb-server.vercel.app/upload-message', formData);
            console.log("Form submitted successfully:", response.data);
            toast.success("We received you message.")
            // Handle success or any other actions after successful submission
        } catch (error) {
            console.error("Error submitting form:", error.message);
            toast.error("Error submitting form. Please try again later.");
            // Handle error or show error message to user
        }
    };

    return (
        <Container>
            <Box sx={{ p: forBelow767 ? "100px 0px 40px 0px" : "210px 0px 64px 0px" }}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box sx={{ width: "100%", p: "32px 24px", borderRadius: "20px", border: "1px solid rgba(145,142,175,0.32)", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "center", alignItems: "center", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)" }}>
                            <Box sx={{ textAlign: "center", display: "flex", gap: "24px", flexDirection: "column", justifyContent: "center", width: "80%" }}>
                                <Typography variant="h3">Get in touch</Typography>
                                <Typography variant="h6" color="text.secondary">Send your message, we will get back to you soon. Maximum 24 hours we will take to communicate</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
                                <TextField
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />
                                <TextField
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />
                                <TextField
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    id="outlined-basic"
                                    label="Subject"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />
                                <TextField
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    id="outlined-basic"
                                    label="Message"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                            </Box>
                            <Button onClick={handleSubmit} variant="contained" sx={{ width: "220px" }}>Send</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
