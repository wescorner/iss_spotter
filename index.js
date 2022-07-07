const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log(error);
  for (const time of passTimes) {
    const d = new Date(time.risetime * 1000);
    console.log(`${d} for ${time.duration} seconds`);
  }
});
