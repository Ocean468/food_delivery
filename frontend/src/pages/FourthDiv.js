
import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";

// Sample icons
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DeckIcon from "@mui/icons-material/Deck";

const services = [
  {
    title: "Organic Food",
    description: "Where purity meets flavour, offering nature's finest for your nourishment and taste.",
    icon: <img src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/658e6ce8c4c1c4b70cac81e1_home-service-icon-01.svg" style={{width:'60px'}} />, 
  },
  {
    title: "Delivery Services",
    description: "Convenience meets reliability to bring your needs right to your doorstep.",
    icon: <img src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/658e6ce89b4bd43921affb15_home-service-icon-02.svg"  style={{width:'60px'}}/>, 
  },
  {
    title: "Warm & Enjoy",
    description: "Where every experience is crafted to envelop you in comfort & delight.",
    icon: <img src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/658e6ce8a7939e4251c88850_homer-service-icon-03.svg" style={{width:'50px'}}/>, 
  },
  {
    title: "Savour & Replay",
    description: "Welcome to the world where savouring and replaying joyous tastes is the norm.",
    icon: <img src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/658e6ce8c2e6f5a94e590a59_home-service-icon-04.svg"  style={{width:'50px'}}/>, 
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ backgroundColor: "#FAF1E4", py: 8, px: 3,mt:8 }}>
      <Grid container spacing={4}  px={4}>
        {/* Left Section */}
        <Grid item xs={12} md={5}>
          <Typography variant="h2" color="error" fontStyle="itlaic" fontWeight={600} mt={15}>
            Services
          </Typography>
          
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3,mt:2, }}>
          Enjoy fast, fresh, and flavorful meals delivered straight to your door. Choose from a variety of cuisines, customize your orders, and track deliveries in real time. With high-quality ingredients and expertly prepared dishes, we bring restaurant-quality dining to your home. Order effortlessly and savor every bite with convenience!
          </Typography>
          
        </Grid>

        {/* Right Section - Staggered Card Layout */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "grid",
              justifyItems:'center',
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "auto auto",
              gap: 3,
             
            }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  boxShadow: 3,
                  transform: index % 2 === 0 ? "translateY(20px)" : "translateY(-20px)",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    {service.icon}
                    <Typography variant="h6" fontWeight="bold" sx={{ ml: 1 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesSection;
