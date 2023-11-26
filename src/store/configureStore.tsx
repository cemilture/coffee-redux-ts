import { configureStore, Reducer } from "@reduxjs/toolkit";
import coffeeReducer, { CoffeeState } from "../reducers/coffeeReducer";
import { CoffeeAction } from "../actions/coffeeActions";

const rootReducer: Reducer<CoffeeState, CoffeeAction> = (
  state = { coffees: [], filteredCoffees: [] },
  action
) => {
  if ("type" in action) {
    return coffeeReducer(state, action);
  }
  return state;
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
