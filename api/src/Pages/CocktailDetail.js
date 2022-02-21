import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../Pages/Card.css";

const CocktailDetail = () => {
  const [cocktailDetail, setCocktailDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const { idDrink } = useParams();
  useEffect(async () => {
    try {
      setLoading(true);
      let result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );
      setLoading(false);
      setCocktailDetail(result.data.drinks[0]);
    } catch (error) {
      setLoading(false);
      setErrors(true);
    }
  }, []);
  return (
    <div>
      {loading ? (
        <h1>wait </h1>
      ) : errors ? (
        <h1>slm aalaykom</h1>
      ) : (
        <>
          <Card className="cardmui" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cocktailDetail.strDrinkThumb}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h1>{cocktailDetail.strDrink}</h1>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>{cocktailDetail.strInstructions}</p>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default CocktailDetail;
