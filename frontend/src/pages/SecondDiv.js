import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <Box sx={{ px: 8, py: 10, bgcolor: "white" }}>
      <Grid container alignItems="center" spacing={4}>
        {/* Left Side - Images */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            component="img"
            src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/65683ec6d8ab06bd7541fe1d_home-about-image.jpg"
            alt="Main Dish"
            sx={{
              width: "80%",
              borderRadius: "12px",
              boxShadow: 3,
            }}
          />
          <Box
            component="img"
            src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/65683ec6954f8b10ec4f6762_home-about-absolute.jpg"
            alt="Soup"
            sx={{
              width: "50%",
              borderRadius: "12px",
              boxShadow: 3,
              position: "absolute",
              mt:30,
              right: 10,
            }}
          />
        </Grid>

        {/* Right Side - Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
          Find the Perfect Recipe for Every Occasion
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Explore a world of enticing flavors and culinary marvels. Dive into
            a collection of captivating dishes designed to delight your senses.
            Experience an array of favorites that elevate your dining journey.
          </Typography>

          {/* Buttons */}
          <Box sx={{ mt: 4, display: "flex", justifyContent:'center'}}>
            <Button variant="contained" sx={{ bgcolor: "black", color: "white" }}>
              <Link to='/recipe' style={{textDecoration:'none',color:'white'}}>Get Recipe</Link>
            </Button>
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
