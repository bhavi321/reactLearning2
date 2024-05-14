import { useState } from "react";
import Item from "./Item";
import "./Item.module.css";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  const onBuyButton = (item, e) => {
    console.log(`${item} clicked`);
    let newItems = [...activeItems, item]
    console.log(newItems)
    /*after consoling newItems, we can see that Items are added indefinitely whenever we are clicking on Buy button. To handle this, we can do two(or more) things: 
    Add a logic which does not allow adding more than one element.
    Whenever we click on Buy, then the Buy button should be replaced with remove button.
    */
    setActiveItems(newItems)
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(e) => onBuyButton(item, e)}
          />
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
