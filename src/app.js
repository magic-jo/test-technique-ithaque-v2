// const express = require('express');
// const app = express();
// const dpeRoutes = require('./routes/dpe');

// app.use(express.json());
// app.use('/api/dpe', dpeRoutes);

// app.get('/', (req, res) => {
//   res.send('Bienvenue sur l\'application de recherche immobilière!');
// });

// module.exports = app;


const express = require('express');
const path = require('path');
const app = express();
const dpeRoutes = require('./routes/dpe');

app.use(express.json());
app.use('/api/dpe', dpeRoutes);

// Servir les fichiers statiques de l'application React
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
