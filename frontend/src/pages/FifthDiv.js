import React from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f8f3e9",
        padding: "60px",
        borderRadius: "20px",
        maxWidth: "1200px",
        margin: "auto",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        mt:10,
       
      }}
    >
      {/* Left Side Content */}
      <Box sx={{ maxWidth: "50%", textAlign: { xs: "center", md: "left" },mr:2 }}>
        <Typography variant="h2" fontWeight="bold" sx={{ my: 2 }} color="error">
        Track Your Order, Savor the Wait. 
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ my: 2 }}>
        Stay updated in real time as your meal moves from the kitchen to your doorstep. Monitor your delivery status, estimated arrival time, and rider location effortlessly. Enjoy a seamless food-tracking experience for fresh, hot, and timely meals—because great food is worth the anticipation!
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "10px",
              padding: "12px 24px",
              fontSize: "16px",
              "&:hover": { backgroundColor: "#333" },
            }}
            startIcon={<AppleIcon />}
          >
            App Store
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "10px",
              padding: "12px 24px",
              fontSize: "16px",
              "&:hover": { backgroundColor: "#333" },
            }}
            startIcon={<AndroidIcon />}
          >
            Google Play
          </Button>
        </Box>
      </Box>

      {/* Right Side - Mobile Preview */}
      <img src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?ga=GA1.1.GA1.1.2100473215.1726211382&semt=ais_hybrid" />
        
    </Box>
  );
};

export default Hero;
