const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation().then((passTimes) => {
  for (const time of passTimes) {
    const d = new Date(time.risetime * 1000);
    console.log(`${d} for ${time.duration} seconds`);
  }
});
