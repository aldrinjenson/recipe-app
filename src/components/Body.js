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
  );
};

export default Body;
