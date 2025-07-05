import React, { useState } from "react";
import { TextField, Button, Typography, Container, InputAdornment } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:5000/api/auth/register", credentials);
            alert("Registration successful!");
            navigate("/");
        } catch (error) {
            alert(error.response?.data?.msg || "Registration failed");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <div style={styles.registerBox}>
                <Typography variant="h5" style={styles.title}>Create an Account</Typography>
                <Typography style={styles.subtitle}>Food Delivery</Typography>
                <TextField
                    //label="Username"
                    placeholder="Username"
                    fullWidth
                    variant="outlined"
                    style={styles.input}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle style={{ color: "#4CAF50" }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    //label="Password"
                    placeholder="password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    style={styles.input}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock style={{ color: "#4CAF50" }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" style={styles.button} onClick={handleRegister}>
                    Sign Up
                </Button>
                <Typography style={styles.signupText}>
                    Already have an account? <a href="/" style={styles.link}>Sign In</a>
                </Typography>
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('https://img.freepik.com/free-photo/flat-lay-arrangement-with-salad-box-sauce_23-2148247883.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    registerBox: {
        position: "relative",
        width: "400px",
        background: "white",
        padding: "50px",
        marginRight: "250px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
    },
    title: {
        fontWeight: "bold",
        marginBottom: "10px",
    },
    subtitle: {
        color: "#666",
        fontSize: "14px",
        marginBottom: "20px",
    },
    input: {
        marginBottom: "15px",
    },
    button: {
        backgroundColor: "#4CAF50",
        color: "white",
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        fontSize: "16px",
    },
    signupText: {
        marginTop: "15px",
        fontSize: "14px",
        color: "#666",
    },
    link: {
        color: "#4CAF50",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

export default Register;
