import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  // const [itemz, setItems] = useState(items);
  // const [newItem, setNewItem] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function onItemFormSubmit(newItem) {
    // setNewItem(event.target.value);
   console.log(newItem);
   const newItemz =[...items, newItem];
   setItems(newItemz)
  }

  const itemsToDisplay = items.filter((item) => {
    
    if(search !== "") {
      
      return item.name.indexOf(search) >-1 
    }
    if (selectedCategory === "All") {
      return true;
    
    }else {
      return item.category === selectedCategory;
    }
  });

  

  return (
    <div className="ShoppingList">
      <ItemForm   onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={search} 
      setSearch={setSearch}
      onSearchChange={onSearchChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
