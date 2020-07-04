import React, { useEffect } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Foods from "./components/Foods";
import Recipes from "./components/Recipes";

const App = () => {


  return (
    <div className="App">
      {/* <Navbar /> */}
      <Landing />
      <SearchBar/>
      <Foods/>
      <Recipes/>
    </div>
  );
};

export default App;
