import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log(itemName)
    console.log(itemCategory)
    
    const id = uuid()
    console.log(id)
    const newItem = {
      id: id, 
      name: itemName,
      category: itemCategory,
    }; 
    // setNewItem(newItem)
    onItemFormSubmit(newItem);
  }

  function handleChange(event) {
    console.log(event.target.value)
    setItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    console.log(event.target.value)
    setItemCategory(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
