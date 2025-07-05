import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, Typography, Select, MenuItem, Box, Grid, List, ListItem } from "@mui/material";
import L from "leaflet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Custom Icons
const restaurantIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
  iconSize: [30, 30],
});
const riderIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  iconSize: [30, 30],
});
const customerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
  iconSize: [30, 30],
});

// Dummy Orders Data
const orders = [
  {
    id: 1,
    restaurant: "Tasty Bites",
    customer: "John Doe",
    address: "123 Main Street, City Center",
    status: "Out for Delivery",
    estimatedDeliveryTime: "30 mins",
    orderDetails: [
      { itemId: 201, name: "Grilled Chicken", quantity: 1, price: 12.99 },
      { itemId: 101, name: "Coca-Cola", quantity: 2, price: 5.00 }
    ],
    rider: {
      name: "Alex Smith",
      contact: "+1234567890",
      vehicle: "Bike"
    },
    path: [
      { lat: 40.7128, lng: -74.006 }, // Restaurant
      { lat: 40.73061, lng: -73.935242 }, // Rider's Location
      { lat: 40.748817, lng: -73.985428 }, // Customer's Home
    ],
  },
  {
    id: 2,
    restaurant: "Spicy Delight",
    customer: "Emma Johnson",
    address: "456 Elm Street, Uptown",
    status: "Preparing",
    estimatedDeliveryTime: "45 mins",
    orderDetails: [
      { itemId: 301, name: "Spring Rolls", quantity: 2, price: 9.98 },
      { itemId: 302, name: "Garlic Bread", quantity: 1, price: 3.99 }
    ],
    rider: null,
    path: [
      { lat: 40.713, lng: -74.005 },
      { lat: 40.735, lng: -73.945 },
      { lat: 40.750, lng: -73.980 },
    ],
  },
  {
    id: 3,
    restaurant: "Gourmet Haven",
    customer: "Michael Brown",
    address: "789 River Lane, Midtown",
    status: "Delivered",
    estimatedDeliveryTime: "Delivered 10 mins ago",
    orderDetails: [
      { itemId: 402, name: "Omelette", quantity: 1, price: 6.99 },
      { itemId: 501, name: "Espresso", quantity: 1, price: 2.99 }
    ],
    rider: {
      name: "Sarah Wilson",
      contact: "+9876543210",
      vehicle: "Car"
    },
    path: [
      { lat: 40.680, lng: -73.950 },
      { lat: 40.710, lng: -73.920 },
      { lat: 40.730, lng: -73.980 },
    ],
  },
];

const DeliveryTracking = () => {
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  return (
    <>
    <Navbar/>
    <Grid container sx={{ height: "160vh" }}>
      {/* Sidebar */}
      <Grid item xs={4} sx={{ background: "#F4F4F4", padding: "20px" }}>
        {/* Filters */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          
        </Box>

        {/* Order List */}
        {orders.map((order) => (
          <Card
            key={order.id}
            sx={{
              mb: 2,
              cursor: "pointer",
              borderLeft: selectedOrder.id === order.id ? "5px solid green" : "none",
              boxShadow: selectedOrder.id === order.id ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
            }}
            onClick={() => setSelectedOrder(order)}
          >
            <CardContent>
              <Typography variant="h6">{order.restaurant}</Typography>
              <Typography variant="subtitle1">Customer: {order.customer}</Typography>
              <Typography variant="body2">{order.address}</Typography>
              <Typography variant="body2" color="gray">
                ETA: {order.estimatedDeliveryTime}
              </Typography>
              <Typography
                sx={{
                  background: order.status === "Delivered" ? "gray" : "green",
                  color: "#fff",
                  padding: "5px",
                  mt: 1,
                  borderRadius: "5px",
                  fontSize: "12px",
                  width: "120px",
                  textAlign: "center",
                }}
              >
                {order.status}
              </Typography>
              {/* Order Details */}
              <List>
                {order.orderDetails.map((item) => (
                  <ListItem key={item.itemId} sx={{ fontSize: "14px" }}>
                    {item.quantity}x {item.name} - ${item.price.toFixed(2)}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Grid>

      {/* Map */}
      <Grid item xs={8}>
        <MapContainer center={[40.73061, -73.935242]} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Restaurant Marker */}
          <Marker position={selectedOrder.path[0]} icon={restaurantIcon}>
            <Popup>Restaurant: {selectedOrder.restaurant}</Popup>
          </Marker>

          {/* Rider's Location (if available) */}
          {selectedOrder.rider && (
            <Marker position={selectedOrder.path[1]} icon={riderIcon}>
              <Popup>Rider: {selectedOrder.rider.name} ({selectedOrder.rider.vehicle})</Popup>
            </Marker>
          )}

          {/* Customer Marker */}
          <Marker position={selectedOrder.path[selectedOrder.path.length - 1]} icon={customerIcon}>
            <Popup>Delivery Address: {selectedOrder.address}</Popup>
          </Marker>

          {/* Route Line */}
          <Polyline positions={selectedOrder.path} color="blue" weight={4} />
        </MapContainer>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
};

export default DeliveryTracking;
