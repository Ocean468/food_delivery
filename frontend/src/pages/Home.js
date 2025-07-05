import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutSection from "./SecondDiv";
import CustomCarousel from "./ThirdDiv";
import ServicesSection from "./FourthDiv";
import Hero from "./FifthDiv";
import FoodGallery from "./SixthDiv";
import ContactUs from "./Contact";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "90vh",
          backgroundColor: "#111",
          color: "white",
          textAlign: "left",
          px: 5,
        }}
      >
        {/* Left Side - Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography
            fontSize={60}
            component={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ fontWeight: "bolder", mb: 2, fontFamily: "italic" }}
          >
            Healthy & Tasty Food
          </Typography>
          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            sx={{ mt: 2, maxWidth: "600px" }}
          >
            Delight in the world of delectable, healthful cuisine that thrills your taste buds while feeding your body - welcome to the universe of Nutritious & Tasty food!
          </Typography>
          <Box mt={4}>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              sx={{
                backgroundColor: "#ff4d4d",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: 10,
                ":hover": { backgroundColor: "#e60000" },
              }}
            >
              <Link to='/restaurants' style={{textDecoration:'none', color:'white'}}>
              Get Menu
              </Link>
            </Button>
          </Box>
        </Box>

        {/* Right Side - Image */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
            alt="Food"
            style={{ width: "90%", height: "auto", borderRadius: "10px" }}
          />
        </Box>
      </Box>
      
      <CustomCarousel/>
      <ServicesSection/>
      <AboutSection/>
      <FoodGallery/>
      <Hero/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default Home;
