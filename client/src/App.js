import React from 'react';
import './App.css';
import LocationForm from './components/LocationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue dans notre application</h1>
        <LocationForm /> {/* Ajoute le composant LocationForm ici */}
      </header>
    </div>
  );
}

export default App;
