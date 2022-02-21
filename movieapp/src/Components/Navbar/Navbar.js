import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FilterText from "./FilterText";
import FilterRate from "./FilterRate";
import { Typography } from "@mui/material";

export default function Navbar({ setText, setRate, rate }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TuniBest
          </Typography>
          <Toolbar>
            <FilterText setText={setText} />
            <FilterRate setRate={setRate} rate={rate} />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}