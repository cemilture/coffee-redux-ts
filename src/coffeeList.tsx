import React from "react";
import { useSelector } from "react-redux";
import { CoffeeState } from "./reducers/coffeeReducer";

const CoffeeList: React.FC = () => {
  const { filteredCoffees } = useSelector(
    (state: { coffee: CoffeeState }) => state.coffee
  );

  return (
    <div>
      <h2>Coffe List</h2>
      <ul>
        {filteredCoffees.map((coffee) => (
          <li key={coffee.id}>
            <strong>{coffee.title}</strong>
            <p>{coffee.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeList;
