"use client"

import MealIdeas from './meal-ideas'; 
import { useState } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { on } from 'events';

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const clean = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(clean);
  };

  return (
    <main >
      <h1 className='font-bold text-4xl p-2'>Shopping list</h1>
      <div className='flex'>
        <div className='flex-grow'>
        <NewItem addItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className='flex-grow'>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>

    </main>
  );
}