import Navbar from "./Components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CocktailList from "./Pages/CocktailList";
import About from "./Pages/About";
import Error from "./Pages/Error";
import CocktailDetail from "./Pages/CocktailDetail";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/CocktailList"
          element={<CocktailList search={search} />}
        />
        <Route path="/CocktailList/:idDrink" element={<CocktailDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
