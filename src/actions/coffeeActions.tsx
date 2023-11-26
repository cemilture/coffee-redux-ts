// export type CoffeeAction =
//   | { type: "FILTER_BY_CATEGORY"; payload: string }
//   | { type: "SEARCH_COFFEE"; payload: string };

// export const filterByCategory = (category: string) => ({
//   type: "FILTER_BY_CATEGORY",
//   payload: category,
// });

// export const searchCoffee = (query: string) => ({
//   type: "SEARCH_COFFEE",
//   payload: query,
// });

// src/coffeeActions.ts

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Coffee } from "../reducers/coffeeReducer";

// Action to set coffees in the state
export const setCoffees = createAction<Coffee[]>("SET_COFFEES");

// Async action to fetch coffee data
export const fetchCoffees = createAsyncThunk("FETCH_COFFEES", async () => {
  // Simulate an API call to fetch data from coffees.ts
  const response = await import("../coffees");
  return response.coffees;
});

export const filterByCategory = createAction<string>("FILTER_BY_CATEGORY");
export const searchCoffee = createAction<string>("SEARCH_COFFEE");
