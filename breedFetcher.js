const request = require('request');


const fetchBreedDescription = (breed, callback) => {
  let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(URL, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    callback(error, undefined);
  }

  if (data[0]) {
    callback(undefined, data[0].description)
  } else {
    callback('Could not find breed', undefined);
  }
  });
};


module.exports = fetchBreedDescription;