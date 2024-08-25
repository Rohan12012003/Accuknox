import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SlidePanel from './SlidePanel';

const Navbar = ({ onSearch, sections, onAddWidget }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleAddClick = () => {
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className='navbar'>
      <h3>CNPP Dashboard</h3>
      <div className='sub-nav'>
        <SearchBar onSearch={onSearch} />
        <button className='nav-add-btn btn-md'onClick={handleAddClick}>Add</button>
      </div>
      {isPanelOpen && (
        <SlidePanel 
          sections={sections} 
          onAddWidget={onAddWidget} 
          onClose={handleClosePanel} 
        />
      )}
    </div>
  );
};

export default Navbar;
