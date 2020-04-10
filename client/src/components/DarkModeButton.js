import React, {useState} from 'react'
import useDarkMode from "../hooks/useDarkMode";

const DarkModeButton = () => {
    const[darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
      return(
          <div>
              <button onClick={toggleMode}>Toggle Dark Mode</button>
          </div>
      )
}

export default DarkModeButton;