import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const FeedbackForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    feedbackType: "",
    feedbackMessage: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);

    // Clear the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      feedbackType: "",
      feedbackMessage: "",
    });
  };

  return (
    <Grid container spacing={4} sx={{ maxWidth: 1000, mx: "auto", py: 5, mt: 15 }}>
      {/* Left Side Content */}
      <Grid item xs={12} md={5}>
        <Typography variant="h3" sx={{ fontStyle: "italic", color: "red" }}>
          Feedback
        </Typography>
        <Typography variant="h3" fontWeight="bold">
          Give Us Your Feedback
        </Typography>
        <Typography color="gray" sx={{ my: 2 }}>
          Your thoughts and opinions matter to us! Whether you have suggestions for improvement, ideas to enhance our services, or simply want to share your experience, we’d love to hear from you.
          <br />
          Your feedback helps us grow and provide a better experience for everyone. Please take a moment to fill out this form and let us know what’s on your mind. Every response makes a difference.
        </Typography>
      </Grid>

      {/* Right Side Form */}
      <Grid item xs={12} md={7}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Name */}
              <Grid item xs={6}>
                <Typography fontWeight="bold">First Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Your Name"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight="bold">Last Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>

              {/* Email & Phone */}
              <Grid item xs={6}>
                <Typography fontWeight="bold">Email</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Your Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight="bold">Phone</Typography>
                <TextField
                  fullWidth
                  placeholder="Your Phone Number"
                  variant="outlined"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>

              {/* Feedback Type */}
              <Grid item xs={12}>
                <Typography fontWeight="bold">Feedback Type</Typography>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Select Feedback Type</InputLabel>
                  <Select
                    name="feedbackType"
                    value={formData.feedbackType}
                    onChange={handleChange}
                  >
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="Complaint">Complaint</MenuItem>
                    <MenuItem value="Suggestion">Suggestion</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Message */}
              <Grid item xs={12}>
                <Typography fontWeight="bold">Your Feedback</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Please share your feedback here..."
                  variant="outlined"
                  name="feedbackMessage"
                  value={formData.feedbackMessage}
                  onChange={handleChange}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    px: 5,
                    py: 1.5,
                    borderRadius: 5,
                    "&:hover": { backgroundColor: "darkred" },
                  }}
                >
                  SUBMIT FEEDBACK
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FeedbackForm;
