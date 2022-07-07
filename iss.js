const request = require("request");

const nextISSTimesForMyLocation = function (callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200)
      return callback(Error(response.statusCode), null);
    request(
      `https://ipwho.is/${JSON.parse(body).ip}`,
      (error, response, body) => {
        const parsed = JSON.parse(body);
        if (error) return callback(error, null);
        if (!parsed.success) return callback(parsed.message, null);
        const lat = parsed.latitude;
        const lon = parsed.longitude;
        request(
          `https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`,
          (error, response, body) => {
            if (error) return callback(error, null);
            if (body === "invalid coordinates") return callback(body, null);
            callback(null, JSON.parse(body).response);
          }
        );
      }
    );
  });
};
module.exports = { nextISSTimesForMyLocation };
