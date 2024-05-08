import "./App.css";
import "./components/Item.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItems = ["Dal", "Roti", "Vegetables", "Ghee", "Salad", "Milk"];
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </>
  );
}

export default App;
