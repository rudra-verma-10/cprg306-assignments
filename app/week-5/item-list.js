"use client";

import React, {useState} from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {

  const [sortBy , setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });
 
    


return (

  <div>
      <button onClick={() => setSortBy('name')} className="p-5 m-2 text-xl border border-blue-300 bg-blue-300 rounded-xl">
        Sort by Name</button>
      <button onClick={() => setSortBy('category')} className="p-5 m-2 text-xl border border-blue-300  bg-blue-300 rounded-xl">
        Sort by Category</button>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
);
};

export default ItemList;