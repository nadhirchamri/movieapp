import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CocktailCard.css";

const CocktailCard = ({ drinks }) => {
  return (
    <div className="cardsbro">
      <h1 className="title">{drinks.strDrink}</h1>
      <img className="drinksimg" src={drinks.strDrinkThumb} />
      <Button>
        <Link to={`/CocktailList/${drinks.idDrink}`}>
          <button className="bn29"> View Details</button>
        </Link>
      </Button>
    </div>
  );
};

export default CocktailCard;
