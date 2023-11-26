import { Reducer } from "redux";
import { CoffeeAction } from "../actions/coffeeActions";
import { coffees } from "../coffees";

interface Coffee {
  title: string;
  description: string;
  ingredients: string[];
  category: string;
  id: number;
}

export interface CoffeeState {
  coffees: Coffee[];
  filteredCoffees: Coffee[];
}

const initialState: CoffeeState = {
  coffees: coffees,
  filteredCoffees: [],
};

const coffeeReducer: Reducer<CoffeeState, CoffeeAction> = (
  state = initialState,
  action
): CoffeeState => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filteredCoffees: state.coffees.filter(
          (coffee: Coffee) => coffee.category === action.payload
        ),
      };
    case "SEARCH_COFFEE":
      return {
        ...state,
        filteredCoffees: state.coffees.filter((coffee: Coffee) =>
          coffee.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default coffeeReducer;
