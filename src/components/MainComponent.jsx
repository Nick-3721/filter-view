import React, { useState } from 'react';
import FilterTab from './FilterTab';
import CurrentView from './CurrentView';

const MainComponent = () => {

  const handleToggleView = (newView) => {
    setView(newView);
  };

  const [isOpen, setIsOpen] = useState(false);

  const viewDropDown = () => {
    setIsOpen(!isOpen);
  };

  const [view, setView] = useState('list');

  const data = [
    { id: 1, name: 'Blue Widget', price: 20.99, category: 'Widgets' },
    { id: 2, name: 'Gizmo Plus', price: 49.95, category: 'Gizmos' },
    { id: 3, name: 'Super Gizmo XL', price: 99.99, category: 'Gizmos' },
    { id: 4, name: 'Red Thingamajig', price: 15.49, category: 'Thingamajigs' },
    { id: 5, name: 'Widget Master 3000', price: 79.99, category: 'Widgets' },
    { id: 6, name: 'Turbo Gadget Pro', price: 129.95, category: 'Gadgets' },
    { id: 7, name: 'Mega Widget Deluxe', price: 149.99, category: 'Widgets' },
    { id: 8, name: 'Neon Gizmo', price: 29.99, category: 'Gizmos' },
    { id: 9, name: 'Purple Thingamajig', price: 18.75, category: 'Thingamajigs' },
    { id: 10, name: 'Ultimate Gadget Package', price: 199.99, category: 'Gadgets' },
  ];
  
  return (
    <div className='main-wrapper'>
      < CurrentView 
        view = {view}
        viewDropDown = {viewDropDown}
      />

      {isOpen ? 
        <FilterTab onToggle={handleToggleView} view={view} setView={setView} viewDropdown={viewDropDown || (() => {})} /> 
        : ""
      }
      {view === 'list' ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div className='tiled-filter-view'>
          {data.map((item) => (
            <div key={item.id} className='product-card'>
              <h2>{item.name}</h2> 
              <h3>£{item.price}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default MainComponent;
