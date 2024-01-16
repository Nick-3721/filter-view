import React, { useState, useEffect, useRef } from 'react';

const FilterTab = ({ onToggle, viewDropdown, view, setView }) => {
  // const [view, setView] = useState('list');

  const handleToggle = (newView) => {
    setView(newView);
    onToggle(newView);
    viewDropdown()
  };

  const componentRef = useRef(null);

  const handleClickOutside = (event, newView) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      viewDropdown()
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='toggle-menu' ref={componentRef}>
      <div className='buttons'>
        <button 
          className={ view === 'list' ? 'active' : ''}
          onClick={() => handleToggle('list')}
        >
          <img src='../public/list-solid.svg' alt="List Icon" className='tab-icons'/>
        </button>
        <button 
          className={ view === 'grid' ? 'active' : ''}
          onClick={() => handleToggle('grid')}
        >
          <img src='../public/grid-solid.svg' alt="Grid Icon" className='tab-icons'/>
        </button>
      </div>
    </div>
  );
  console.log(view)
};

export default FilterTab;