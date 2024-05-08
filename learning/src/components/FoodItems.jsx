import Item from "./Item";
import './Item.module.css';
const FoodItems = ({items}) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key = {item} foodItem = {item}/>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
