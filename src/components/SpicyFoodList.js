import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [selectedCategory, setSelectedCategory] =useState('All')

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray);
  }
    // function handleDelete(id){
    //   const newFoodArray = foods.filter(food =>{
    //     return food.id !== id
    //   })
    //   setFoods(newFoodArray)
    // }
  function handleIncrement(id){
    const newFoodArray = foods.map(food =>{
      if(food.id ===id){
        return{...food, heatLevel: food.heatLevel +1}
      } else{
        return food
      }
    })
    setFoods(newFoodArray)
  }

  function handleChange(e) {
    selectedCategory(e.target.value)
    const categoryFiltered = foods.filter(food =>{
      if(food.cuisine === 'All'){
        return true
      }else{
        return food.cuisine === selectedCategory
      }
    })
    setSelectedCategory(categoryFiltered)
  }



  const foodList = selectedCategory.map((food) => (
    <li onClick={()=>handleIncrement(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select  onChange={(e)=>handleChange(e)} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
