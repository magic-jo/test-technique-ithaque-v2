const axios = require('axios');

const getFilteredProperties = async (req, res) => {
  const { geo_distance } = req.query;

  try {
    const response = await axios.get('https://data.ademe.fr/data-fair/api/v1/datasets/dpe-france/lines', {
      params: {
        geo_distance: geo_distance,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des données.' });
  }
};

module.exports = {
  getFilteredProperties,
};
