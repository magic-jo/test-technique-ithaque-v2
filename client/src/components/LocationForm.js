import React, { useState } from 'react';

const isInFrance = (lat, lng) => {
  const franceBounds = {
    north: 51.1241999,
    south: 41.3423278,
    west: -5.1422222,
    east: 9.560016,
  };

  return (
    lat >= franceBounds.south &&
    lat <= franceBounds.north &&
    lng >= franceBounds.west &&
    lng <= franceBounds.east
  );
};

const LocationForm = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [distance, setDistance] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (!isInFrance(lat, lng)) {
      setError('Les coordonnées doivent être en France.');
      return;
    }

    setError('');
    
    try {
      const response = await fetch(`/api/dpe/search?geo_distance=${lat}:${lng}:${distance}`);
      const data = await response.json();
      console.log('Form submitted with:', data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div>
      <h2>Formulaire de localisation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Latitude:</label>
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Distance:</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default LocationForm;
