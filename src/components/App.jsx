import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  ActorsInformation,
  Movies,
  MoviesInformation,
  NavBar,
  Profile,
} from "./index";

// import useStyles from "./styles";

const App = () => {
  // const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MoviesInformation />} />
          <Route path="/actors/:id" element={<ActorsInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
