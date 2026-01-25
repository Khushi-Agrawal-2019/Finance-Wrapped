const csv = require("csv-parser");
const { Readable } = require("stream");

/**
 * Parses CSV buffer into JSON rows
 * @param {Buffer} buffer
 * @returns {Promise<Array>}
 */
function parseCSV(buffer) {
  return new Promise((resolve, reject) => {
    const results = [];

    const stream = Readable.from(buffer.toString());

    stream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (err) => reject(err));
  });
}

module.exports = { parseCSV };
