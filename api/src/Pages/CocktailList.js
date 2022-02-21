import axios from "axios";
import React, { useEffect, useState } from "react";
import CocktailCard from "../Components/CocktailCard";
const CocktailList = ({ search }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  useEffect(async () => {
    try {
      setLoading(true);
      let result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search
      );
      setLoading(false);
      setCocktailList(result.data.drinks);
    } catch (error) {
      setLoading(false);
      setErrors(true);
    }
  }, [search]);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : errors ? (
        <h1>Error getting Data</h1>
      ) : cocktailList == null ? (
        <h2>there is no Drink</h2>
      ) : (
        cocktailList.map((drinks) => (
          <CocktailCard key={drinks.idDrink} drinks={drinks} />
        ))
      )}
    </div>
  );
};

export default CocktailList;
