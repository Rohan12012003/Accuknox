import React, { useState } from 'react';

const Add = ({ addwidget, sectioname }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      // Call addwidget with sectioname and inputValue
      addwidget(sectioname, inputValue);  
      setInputValue(''); // Clear input after submission
      setShowInput(false); // Hide input field after adding widget
    }
  };

  const handleCancel = () => {
    setInputValue(''); // Clear input field
    setShowInput(false); // Hide input field
  };

  return (
    <div className='card add-card'>
      {!showInput && (
        <button className='btn btn-warning widget-add-btn' onClick={handleClick}>+</button>
      )}
      {showInput && (
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder='Enter widget text'
            aria-label='Enter widget text' 
          />
          <button type='submit' className='btn btn-primary'>Add</button>
          <button type='button' className='btn btn-secondary' onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Add;
