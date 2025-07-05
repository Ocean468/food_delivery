import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import RestaurantList from "./pages/RestaurantList";
import RecipeSearch from "./pages/RecipeSearch";
import DeliveryTracking from "./pages/DeliveryTracking";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/restaurants" element={<RestaurantList/>}/>
        <Route path="/recipe" element={<RecipeSearch/>}/>
        <Route path='/deliverytracking' element={<DeliveryTracking/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
