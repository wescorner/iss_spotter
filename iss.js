const request = require("request");

// const fetchyMyIP = function (callback) {
//   request("https://api.ipify.org?format=json", (error, response, body) => {
//     if (error) return callback(error, null);
//     if (response.statusCode !== 200)
//       return callback(Error(response.statusCode), null);
//     return callback(null, JSON.parse(body).ip);
//   });
// };

// const fetchCoordsByIP = function (ip, callback) {
//   request(`https://ipwho.is/${ip}`, (error, response, body) => {
//     const parsed = JSON.parse(body);
//     if (error) return callback(error, null);
//     if (!parsed.success) return callback(parsed.message, null);
//     const latitude = parsed.latitude;
//     const longitude = parsed.longitude;
//     return callback(null, { latitude, longitude });
//   });
// };

// const fetchISSFlyOverTimes = function (coords, callback) {
//   const lat = coords.latitude;
//   const lon = coords.longitude;
//   request(
//     `https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`,
//     (error, response, body) => {
//       if (error) return callback(error, null);
//       if (body === "invalid coordinates") return callback(body, null);
//       callback(null, JSON.parse(body).response);
//     }
//   );
// };
module.exports = { fetchyMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
