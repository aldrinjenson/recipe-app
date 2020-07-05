import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodList from "./FoodList";
import Recipes from "./Recipes";
import SearchBar from "./SearchBar/Searchbar";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("chicken");

  return (
    <div className="body">
      <div className="container">
        <SearchBar
          setSearchQuery={setSearchQuery}
          placeholder="Enter name of the food you wish to try"
        />

        <Tabs>
          <TabList>
            <Tab>Related Recipes</Tab>
            <Tab>Food Details</Tab>
          </TabList>

          <TabPanel>
            <Recipes searchQuery={searchQuery} />
          </TabPanel>
          <TabPanel>
            <FoodList searchQuery={searchQuery} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Body;
