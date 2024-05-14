import styles from "./foodInput.module.css";

const FoodInput = ({handleKeyDown}) => {

    return (
      <>
        <input type="text" placeholder="Enter Food Item here" className= {styles.foodInput}
        onKeyDown={handleKeyDown}/>
      </>
    );
  };
  export default FoodInput;
   