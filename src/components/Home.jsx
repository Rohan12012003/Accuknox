import React, { useState, useEffect } from 'react';
import Sections from './Sections';
import data from './dashboardData.json';
import Navbar from './Navbar';

const Home = () => {
  const [dashboard, setDashboard] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddSection, setShowAddSection] = useState(false);
  const [newSectionName, setNewSectionName] = useState('');

  useEffect(() => {
    setDashboard(data.categories);
  }, []);

  const addwidget = (sectionid, value) => {
    setDashboard(prevDashboard =>
      prevDashboard.map(section =>
        section.name === sectionid
          ? { ...section, widgets: [...section.widgets, { id: section.widgets.length + 1, text: value }] }
          : section
      )
    );
  };

  const delwidget = (sectionid, value) => {
    setDashboard(prevDashboard =>
      prevDashboard.map(section =>
        section.name === sectionid
          ? { ...section, widgets: section.widgets.filter(widget => widget.text !== value) }
          : section
      )
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredDashboard = dashboard.map(section => ({
    ...section,
    widgets: section.widgets.filter(widget => widget.text.toLowerCase().includes(searchTerm.toLowerCase()))
  }));

  const handleAddSectionClick = () => {
    setShowAddSection(true);
  };

  const handleCancelAddSection = () => {
    setShowAddSection(false);
    setNewSectionName('');
  };

  const handleAddSection = () => {
    if (newSectionName.trim()) {
      setDashboard(prevDashboard => [
        ...prevDashboard,
        { name: newSectionName, widgets: [] }
      ]);
      handleCancelAddSection();
    }
  };

  return (
    <div className='home'>
      <Navbar sections={data.categories} onAddWidget={addwidget} onSearch={handleSearch} />
      {filteredDashboard.map((section, index) => (
        <Sections
          key={index}
          sectioname={section.name}
          widgets={section.widgets.map(widget => widget.text)}
          addwidget={addwidget}
          delwidget={delwidget}
        />
      ))}
      {/* Button to trigger adding a new section */}
      <div className="add-section-button-container">
        <button className='btn btn-primary section-add-btn' onClick={handleAddSectionClick}>+ Add Section</button>
      </div>
      {/* Modal/Form for adding a new section */}
      {showAddSection && (
        <div className='add-section-modal'>
          <h4>Add New Section</h4>
          <input
            type='text'
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            placeholder='Enter section name'
          />
          <button onClick={handleAddSection}>Add</button>
          <button onClick={handleCancelAddSection}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Home;
