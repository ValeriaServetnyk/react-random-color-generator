import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// define variable for the color

const RandomColor = () => {
  const [color, setColor] = useState('#000');

  // add state change when the button is clicked. The actual assignment of the random color

  const handleGenerate = () => {
    const newColor = randomColor({
      luminosity: 'random',
      hue: 'random',
    });
    setColor(newColor);
  };

  // what is going to be shown in the browser plus styles.

  return (
    <div
      style={{
        backgroundColor: color,
        height: '100vh',
        width: '100vw',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.5s ease-in-out',
      }}

      // className="container"
    >
      <button
        style={{
          color: color,
          padding: '40px',
          borderRadius: '10px',
          fontSize: 'large',
          fontWeight: 'bold',
        }}
        onClick={handleGenerate}
      >
        Generate
      </button>
      <div
        style={{
          fontSize: 'large',
          fontWeight: 'bold',
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
};

export default RandomColor;
