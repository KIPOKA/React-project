import React, { useState } from 'react';

function ModeToggle() {
  // Use the state to manage the darkModeOn value
  const [darkModeOn, setDarkModeOn] = useState(true);

  const darkMode = <h1>Dark mode is on</h1>;
  const lightMode = <h1>Light mode is on</h1>;

  function handleClick() {
    // Toggle the value of darkModeOn
    setDarkModeOn(!darkModeOn);

    // Log the appropriate message
    if (darkModeOn) {
      console.log('Dark mode is on');
    } else {
      console.log('Light mode is on');
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Activate</button>
    </div>
  );
}

export default ModeToggle;
