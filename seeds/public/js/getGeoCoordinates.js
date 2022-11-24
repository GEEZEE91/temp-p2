// pull in the MySQL API key saved in .env file
require('dotenv').config();

async function getGeoCoordinates(address){
    const apiKey = process.env.apiKey;
    const baseUrl = process.env.baseUrl;
    // const address = document.querySelector('#user-address').value.trim();
    const apiUrl = baseUrl + apiKey + '&query=' + address + '&limit=3';
    // const apiUrl = process.env.baseUrl + process.env.apiKey + '&query=' + address + '&limit=3';
    const response = await fetch(apiUrl);
    const data = await response.json();
    let lat = data.data[0].latitude;
    let long = data.data[0].longitude;
    // console.log('lat and long are', lat, long);
    return { lat, long };
  }

module.exports = getGeoCoordinates;