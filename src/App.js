import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Opcional, para estilos personalizados

function App() {
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/puzzles')
      .then(response => setPuzzles(response.data))
      .catch(error => console.error('Error fetching puzzles:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>AR Puzzle Locations</h1>
      </header>
      <ul>
        {puzzles.map((puzzle, index) => (
          <li key={index}>
            <h2>{puzzle.location}</h2>
            <p>{puzzle.description}</p>
            <p>{puzzle.isCompleted ? 'Completed' : 'Not Completed'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
