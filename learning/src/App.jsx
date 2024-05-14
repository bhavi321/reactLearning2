import "./App.css";
import "./components/Item.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/foodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (e) => {
    if(e.key === "Enter"){
      let newFoodItem = [...foodItems, e.target.value]
      setFoodItems(newFoodItem)
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container> */}
    </>
  );
}

export default App;
