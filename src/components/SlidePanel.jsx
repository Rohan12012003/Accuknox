import React, { useState } from 'react';

const SlidePanel = ({ sections, onAddWidget, onClose }) => {
  const [selectedSection, setSelectedSection] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  const handleWidgetTextChange = (e) => {
    setWidgetText(e.target.value);
  };

  const handleAddClick = () => {
    if (selectedSection && widgetText.trim()) {
      onAddWidget(selectedSection, widgetText);
      setWidgetText('');
      onClose();
    }
  };

  return (
    <div className='slide-panel'>
      <div className='slide-panel-content'>
        <button className='close-button' onClick={onClose}>X</button>
        <h3>Add Widget</h3>
        <div className='slide-form'>
        <div className='form-group'>
          <label htmlFor='section'>Select Section</label>
          <select id='section' value={selectedSection} onChange={handleSectionChange}>
            <option value=''>Select a section</option>
            {sections.map(section => (
              <option key={section.name} value={section.name}>{section.name}</option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='widgetText'>Widget Text</label>
          <input 
            type='text' 
            id='widgetText' 
            value={widgetText} 
            onChange={handleWidgetTextChange} 
            placeholder='Enter widget text' 
          />
        </div>
        </div>
        <div className='btn-div'>
        <button className='btn btn-primary' onClick={handleAddClick}>Add Widget</button>
        <button className='btn btn-secondary' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SlidePanel;
