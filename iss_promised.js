const request = require("request-promise-native");

const fetchMyIP = function () {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function (input) {
  const ip = JSON.parse(input).ip;
  return request(`https://ipwho.is/${ip}`);
};

const fetchFlyOverTimes = function (input) {
  const lat = JSON.parse(input).latitude;
  const lon = JSON.parse(input).longitude;

  return request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`);
};
const nextISSTimesForMyLocation = function () {
  //
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchFlyOverTimes)
    .then((body) => {
      return JSON.parse(body).response;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { nextISSTimesForMyLocation };
