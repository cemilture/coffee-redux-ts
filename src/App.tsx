import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory, searchCoffee } from "./actions/coffeeActions";
import CoffeeList from "./coffeeList";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(searchCoffee(searchTerm));
  }, [dispatch, searchTerm]);

  // useEffect(() => {
  //   // Execute search logic when searchTerm changes
  //   handleSearch();
  // }, [searchTerm]);

  const handleCategoryFilter = (category: string) => {
    dispatch(filterByCategory(category));
  };

  // const handleSearch = (updatedValue?: string) => {
  //   console.log("Search Term:", updatedValue || searchTerm);
  //   dispatch(searchCoffee(updatedValue || searchTerm));
  // };

  const handleClear = () => {
    setSearchTerm(""); // Clear the search term
    dispatch(searchCoffee("")); // Trigger search with an empty string
  };

  const handleShowAll = () => {
    dispatch(filterByCategory(""));
    dispatch(searchCoffee(""));
  };

  return (
    <div className="container">
      <div className="button-container">
        <h1>Coffee App</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search coffee..."
            onChange={(e) => {
              e.persist();
              const updatedValue = e.target.value;
              setSearchTerm(updatedValue);
              // handleSearch(updatedValue);
            }}
            value={searchTerm}
          />
          <button className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>
        <button onClick={handleShowAll}>Show All Coffees</button>
        <button onClick={() => handleCategoryFilter("hot")}>Hot Coffees</button>
        <button onClick={() => handleCategoryFilter("iced")}>
          Iced Coffees
        </button>
      </div>
      <hr />
      <div className="coffeList-container">
        <CoffeeList />
      </div>
    </div>
  );
};

export default App;
