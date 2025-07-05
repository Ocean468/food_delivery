import React from "react";
import Slider from "react-slick";
import { Box, Typography, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const foodImages = [
  "https://www.dosafactorymenu.com/blog-admin/images/indian-food-items-apt-for-everyone041641.jpeg",
  "https://content.jdmagicbox.com/comp/jalpaiguri/c2/9999p3561.3561.130729124114.p2c2/catalogue/biki-dhaba-baradighi-jalpaiguri-restaurants-4b1gu7x.jpg",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
  "https://blog.swiggy.com/wp-content/uploads/2023/12/Image-1-Tandoori-Chicken-1024x538.png",
  "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/7-pani-puri-canva-phpxM6qmK",
  "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347382/india-food-ras-malai/india-food-ras-malai-1120x732.jpg",
];

const reversedFoodImages = [...foodImages].reverse();

const sliderSettingsRight = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
};

const sliderSettingsLeft = {
  ...sliderSettingsRight,
  rtl: true, // Moves the carousel to the left
};

const FoodGallery = () => {
  return (
    <Box sx={{ background: "#1a1a1a", color: "#fff", py: 5, mt:15 }}>
      <Container>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ textAlign: "center", color: "red", fontStyle: "italic" }}
        >
          Gallery
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          A Delicious Display
        </Typography>

        {/* First Row - Moves Right */}
        <Slider {...sliderSettingsRight}>
          {foodImages.map((img, index) => (
            <Box key={index} sx={{ px: 1 }}>
              <img
                src={img}
                alt={`Food ${index}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          ))}
        </Slider>

        {/* Second Row - Moves Left */}
        <Slider {...sliderSettingsLeft} style={{ marginTop: "20px" }}>
          {reversedFoodImages.map((img, index) => (
            <Box key={index} sx={{ px: 1 }}>
              <img
                src={img}
                alt={`Food ${index}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default FoodGallery;
