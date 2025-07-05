import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const RestaurantCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      {/* Heading */}
      <Typography variant="h3" fontWeight="bold" gutterBottom mt={8} fontFamily='itlaic'>
        Choice among over 1250 restaurants globally.
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Embark on a culinary journey with the preferred selection of over 1250 restaurants worldwide.
      </Typography>

      {/* Carousel */}
      <Box sx={{ maxWidth: "80%", margin: "auto", pt: 2 }}>
        <Slider {...settings}>
          <Box>
            <img src='https://cdn1.designhill.com/uploads/personal_designs/thumbs/7507b51062403fcfa92e62af13f81026-36d03a695bee8fc47a39306832332a1716504379951872.jpg?ver=2.12.79' alt="Fresher" style={{ width: "100px", margin: "auto" }} />
          </Box>
          <Box>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKdlNSyO831VQzABs2_7phbKaUXziEiWXzg&s' alt="Tasty Day" style={{ width: "120px", margin: "auto" }} />
          </Box>
          <Box>
            <img src='https://marketplace.canva.com/EAGOADQey2g/1/0/1600w/canva-brown-simple-circle-restaurant-logo-BiB84MUi2zQ.jpg' alt="Tasty Food" style={{ width: "140px", margin: "auto" }} />
          </Box>
          <Box>
            <img src='https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/1631/posts/32688/item-list-card/pizza_hub_logo_JLP8KG.jpeg' alt="Tasty Day" style={{ width: "120px", margin: "auto" }} />
          </Box>
          <Box>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6DflS9RiUOkhzdDd0BJirIrQz6vEu6VXgA&s' alt="Tasty Day" style={{ width: "120px", margin: "auto" }} />
          </Box>
        </Slider>
      </Box>
    </Container>
  );
};

export default RestaurantCarousel;
