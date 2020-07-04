import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodList from "./FoodList";
import Recipes from "./Recipes";
import SearchBar from "./Searchbar";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("chicken");

  return (
    <div className="body">
      
      <SearchBar setSearchQuery={setSearchQuery} />

      <Tabs>
        <TabList>
          <Tab>Food Details</Tab>
          <Tab>Related Recipes</Tab>
        </TabList>

        <TabPanel>
          <FoodList searchQuery={searchQuery} />
        </TabPanel>
        <TabPanel>
          <Recipes searchQuery={searchQuery} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Body;
