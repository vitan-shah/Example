import React, { useState } from 'react';

const InputWithButton = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler for button click
  const handleButtonClick = () => {
    // Do something with the input value, e.g., send it to an API, perform an action, etc.
    console.log('Input value:', inputValue);
  };

  return (
    <div>
      {/* Input field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />

      {/* Button */}
      <button onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
};

export default InputWithButton;
