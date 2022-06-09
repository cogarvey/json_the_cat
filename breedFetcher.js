const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback(`Could not find breed ${breedName}: `, null);
    }
  });
};


module.exports = fetchBreedDescription;