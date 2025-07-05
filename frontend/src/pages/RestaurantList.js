import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { 
  Card, CardContent, CardMedia, Typography, Grid, Box, Button, Divider, Dialog, DialogTitle, DialogContent, TextField, Snackbar, Alert, CircularProgress 
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stripePromise = loadStripe("pk_test_51R3jOoGLYkneHjthkpBMtiReqejsihZSfS9WCLT6t2Inb0mteTFLXjyDbz0wyH0lv5F49BIUWiMGLK0B7uUIEI4W00ECNFxbxi");

// Checkout Form Component
const CheckoutForm = ({ orderDetails, handleClose, setSnackbar }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const { data } = await axios.post("http://localhost:5000/api/create-payment-intent", {
        price: orderDetails.totalPrice,
        name: orderDetails.name,
      });

      const clientSecret = data.clientSecret;
      if (!clientSecret) {
        setSnackbar({ open: true, message: "Could not get client secret.", severity: "error" });
        setProcessing(false);
        return;
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        setSnackbar({ open: true, message: "Payment failed.", severity: "error" });
      } else {
        setSnackbar({ open: true, message: "Order Placed Successfully!", severity: "success" });
        handleClose();
      }
    } catch (error) {
      setSnackbar({ open: true, message: "Something went wrong!", severity: "error" });
    } finally {
      setProcessing(false);
    }
  };

  
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "450px", margin: "auto" }}>
      <CardElement 
        options={{
          style: {
            base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
            invalid: { color: "#9e2146" },
          },
        }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        disabled={!stripe || processing} 
        fullWidth
        sx={{ backgroundColor: "#ff4d4d", ":hover": { backgroundColor: "#e60000" }, borderRadius:5,px:3, fontWeight:'bold',fontSize:'16px' ,mt:2 }}
      >
        {processing ? <CircularProgress size={24} /> : "Pay Now"}
      </Button>
    </form>
  );
};

// Restaurant List Component
const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    quantity: 1, address: "", mobile: "", name: "", totalPrice: 0,
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOrderDetails({
      quantity: 1, address: "", mobile: "", name: "", totalPrice: item.price,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({
      ...prev,
      [name]: value,
      totalPrice: selectedItem ? selectedItem.price * (name === "quantity" ? Number(value) : prev.quantity) : prev.totalPrice,
    }));
  };

  return (
    <>
    <Navbar/>

    <Box sx={{ p: 4,}}>
      <Typography variant="h2" gutterBottom align="center" fontWeight={600} fontFamily='italic' mt={4} mb={8}>
        Restaurants & Menus
      </Typography>

      {restaurants.map((restaurant) => (
        <Card key={restaurant.id} sx={{ mb: 4, p:10,backgroundColor: "#FAF1E4" }}>
          <CardMedia component="img" height="500" width="200" image={restaurant.image} alt={restaurant.name} />
          <CardContent>
            <Typography variant="h4" color="black">{restaurant.name}</Typography>
            <Typography variant="body1" color="black" >{restaurant.location}</Typography>
          </CardContent>

          {restaurant.menu.map((category) => (
            <Box key={category.category} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mt: 2 }}>{category.category}</Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {category.items.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                      <CardMedia component="img" height="420" image={item.image} alt={item.name} />
                      <CardContent>
                        <Typography variant="subtitle1">{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>${item.price}</Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ backgroundColor: "#ff4d4d", ":hover": { backgroundColor: "#e60000" }, borderRadius:5,px:3, fontWeight:'bold',fontSize:'16px'  }}
                          onClick={() => handleOpenDialog(item)}
                        >
                          Order
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Card>
      ))}

      {/* Order Details Popup */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle sx={{fontWeight:'600', fontSize:'28px'}}>Order Detail</DialogTitle>
        <DialogContent>
          <TextField placeholder="Enter Your Name" name="name" value={orderDetails.name} onChange={handleInputChange} fullWidth margin="normal" />
          <TextField placeholder="Enter Your Mobile No." name="mobile" value={orderDetails.mobile} onChange={handleInputChange} fullWidth margin="normal" />
          <TextField placeholder="Enter Your Address" name="address" value={orderDetails.address} onChange={handleInputChange} fullWidth margin="normal" />
          <TextField placeholder="Enter Quantity" name="quantity" type="number" value={orderDetails.quantity} onChange={handleInputChange} fullWidth margin="normal" />
          <Typography variant="h5" sx={{ mt: 2 }}>Total Price: ${orderDetails.totalPrice}</Typography>
        </DialogContent>
        <DialogContent>
          
          <Elements stripe={stripePromise}>
            <CheckoutForm orderDetails={orderDetails} handleClose={handleCloseDialog} setSnackbar={setSnackbar} />
          </Elements>
          
        </DialogContent>
      </Dialog>

      {/* Success/Error Notification */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={4000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
    <Footer/>
    </>
  );
};

export default RestaurantList;
