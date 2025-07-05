import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    InputAdornment
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const buttonColor = "#4CAF50";

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
            localStorage.setItem("token", res.data.token);
            alert(res.data.msg);
            navigate("/home");
        } catch (error) {
            alert(error.response.data.msg);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <div style={styles.loginBox}>
                <Typography variant="h5" style={styles.title}>Welcome Back</Typography>
                <Typography style={styles.subtitle}>Food Delivery</Typography>

                {/* Email Field with Icon */}
                <TextField
                    //label="Email Address"
                    placeholder="Username"
                    fullWidth
                    variant="outlined"
                    style={styles.input}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle style={{ color: buttonColor }} />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Password Field with Icon */}
                <TextField
                    //label="Password"
                    type="password"
                    placeholder="password"
                    fullWidth
                    variant="outlined"
                    style={styles.input}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock style={{ color: buttonColor }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControlLabel
                    control={<Checkbox style={{ color: buttonColor }} />}
                    label="Remember me"
                    style={styles.checkbox}
                />

                <Button
                    variant="contained"
                    style={{ ...styles.button, backgroundColor: buttonColor }}
                    onClick={handleLogin}
                >
                    Sign In
                </Button>

                <Typography style={styles.signupText}>
                    Don't have an account? <Link to='/register' style={styles.link}>Sign Up</Link>
                </Typography>
            </div>
        </div>
    );
};

// Inline CSS with Responsive Styles
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
    loginBox: {
        position: "relative",
        width: "400px",
        background: "white",
        padding: "40px",
        marginRight:"250px",
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
    checkbox: {
        textAlign: "left",
        width: "100%",
    },
    button: {
        color: "white",
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        fontSize: "16px",
        transition: "0.3s",
        cursor: "pointer",
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

    /* Responsive Design */
    "@media (max-width: 500px)": {
        loginBox: {
            width: "90%",
            padding: "30px",
        },
    },
};

export default Login;
