import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const API_KEY = "9e403b996ab14ea48c7e710555dc813b"; // Replace with your API key

  // Search Recipes
  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Fetch Recipe Details
  const fetchRecipeDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      setSelectedRecipe(response.data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <>
    <Navbar/>
    <div style={{ textAlign: "center", padding: "20px",marginBottom:'300px',marginTop:'30px'}}>
      <TextField
        placeholder="Search Recipes"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "20px", width: "500px",}}
      />
      <Button variant="contained" color="primary" onClick={searchRecipes} sx={{ backgroundColor: "#ff4d4d", ":hover": { backgroundColor: "#e60000" }, borderRadius:4,px:3,py:1.5,ml:3, fontWeight:'bold',fontSize:'16px' }}>
        Search
      </Button>

      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card>
              <CardMedia component="img" height="250" image={recipe.image} alt={recipe.title} />
              <CardContent>
                <Typography variant="h6">{recipe.title}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => fetchRecipeDetails(recipe.id)}
                  sx={{ backgroundColor: "#ff4d4d", ":hover": { backgroundColor: "#e60000" }, borderRadius:5,px:3, fontWeight:'bold',fontSize:'16px'  }}
                >
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recipe Details Dialog */}
      <Dialog open={Boolean(selectedRecipe)} onClose={() => setSelectedRecipe(null)} maxWidth="sm" fullWidth>
        {selectedRecipe && (
          <>
            <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {selectedRecipe.title}
              <IconButton onClick={() => setSelectedRecipe(null)} color="primary">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <img src={selectedRecipe.image} alt={selectedRecipe.title} style={{ width: "50%" , textAlign:'center'}} />
              <Typography variant="h6" style={{ marginTop: "10px" }}>Ingredients:</Typography>
              <ul>
                {selectedRecipe.extendedIngredients.map((ing) => (
                  <li key={ing.id}>{ing.original}</li>
                ))}
              </ul>
              <Typography variant="h6">Instructions:</Typography>
              <Typography dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }} />
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
    <Footer/>
    </>
  );
};

export default RecipeSearch;
