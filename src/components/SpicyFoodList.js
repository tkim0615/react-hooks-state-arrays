import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood])
  }
  const handleClick = (clickedFood) =>{
    let newFoodArray = foods.map(food =>{
      if(food.id === clickedFood.id){
        return {...food, heatLevel: food.heatLevel + 2}
      }else{
        return food
      }
    })
    setFoods(newFoodArray)
  }


  const handleChange =(e) =>{
    setSelectedCategory(e.target.value)
  }

  let filter = foods.filter(food=>{
    if(selectedCategory === "All"){
      return true
  }else{
    return selectedCategory === food.cuisine
  }
})

  const foodList = filter.map((food) => (
    <li onClick = {()=>handleClick(food)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));




  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select onChange={handleChange} name="filter">
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
    </div>
  );
}

export default SpicyFoodList;
