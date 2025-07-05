import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Menu, Lock, Restaurant, ShoppingCart, Payment, Room } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [username, setUsername] = useState("");
      const navigate = useNavigate();
  
      useEffect(() => {
          axios.get("http://localhost:5000/api/auth/profile", { headers: { Authorization: localStorage.getItem("token") } })
              .then(res => setUsername(res.data.username))
              .catch(() => navigate("/"));
      }, []);
  
      const handleLogout = () => {
          localStorage.removeItem("token");
          navigate("/");
      };
  


    return (
        <>
         <AppBar position="static" sx={{ backgroundColor: "#111" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", mx:2 }}>
        <Typography
          variant="h5"
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ fontFamily: "cursive", color: "#fff" }}
        >
          Food Delivery
        </Typography>
        <div>

          <Button sx={{ color: "white", mx:2,fontSize:'14px' }}><Link to='/home' style={{textDecoration:'none', color:'white'}}>Home</Link></Button>
          <Button sx={{ color: "white",mx:2,fontSize:'14px' }}><Link to='/restaurants' style={{textDecoration:'none', color:'white'}}>Restaurant & Menu</Link></Button>
          <Button sx={{ color: "white" ,mx:2,fontSize:'14px'}}><Link to='/recipe' style={{textDecoration:'none', color:'white'}}>Recipes</Link></Button>
          <Button sx={{ color: "white",mx:2,fontSize:'14px' }}><Link to='/deliverytracking' style={{textDecoration:'none', color:'white'}}>Delivery Tracking</Link></Button>
          </div>
       
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ff4d4d", ":hover": { backgroundColor: "#e60000" }, borderRadius:5,px:3, fontWeight:'bold',fontSize:'16px'  }}
        >
          <Link to='/' style={{textDecoration:'none', color:'white'}}>
         LogIn
         </Link>
        </Button>
        {/*<Typography variant="title" color="red" mx={1} fontWeight={600}>Welcome, {username}!</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout} mx={3}>Logout</Button>*/}
        
      </Toolbar>
    </AppBar>
  
                         


                    
            
        </>
    );
};

const styles = {
    appBar: {
        backgroundColor: "#4CAF50", // Green Theme
        width: "100%",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        fontWeight: "bold",
    },
    desktopMenu: {
        display: "flex",
        gap: "20px",
    },
    navLink: {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "16px",
    },
    menuButton: {
        display: "none", // Hide menu icon on desktop
    },
    drawer: {
        width: "250px",
        paddingTop: "20px",
    },
    icon: {
        color: "#4CAF50", // Green Icon Color
    },
    "@media (max-width: 768px)": {
        desktopMenu: {
            display: "none", // Hide desktop menu on mobile
        },
        menuButton: {
            display: "block", // Show hamburger menu
        },
    },
};

export default Navbar;
