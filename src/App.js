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
      }}

      // className="container"
    >
      <button
        style={{
          color: color,
          padding: '40px',
          borderRadius: '10px',
          fontSize: 'larger',
        }}
        onClick={handleGenerate}
      >
        <h1>Generate</h1>
      </button>
      <h2>Generated Color {color}</h2>
    </div>
  );
};

export default RandomColor;
