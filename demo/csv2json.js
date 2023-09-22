const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const filter = ".csv";

const csvPath = path.join(__dirname, "csv");
const jsonPath = path.join(__dirname, "json");
const data = {};

async function processCsv(filename) {
  console.log("filename", filename);

  const jsonArray = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(csvPath, `${filename}`))
      .pipe(csv())
      .on("headers", (headers) => {
        csv.headers = headers;
      })
      .on("data", (row) => {
        const jsonObject = {};
        for (const header of csv.headers) {
          jsonObject[header] = row[header];
        }
        jsonArray.push(jsonObject);
      })
      .on("end", () => {
        const key = filename.replace(".csv", "");
        console.log({ [key]: jsonArray });
        data[key] = jsonArray;
        resolve();
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

console.log("Reading csv from ", csvPath);

async function processAllCsvFiles() {
  let files = fs.readdirSync(csvPath);
  files = files.filter((file) => file.endsWith(filter));

  const promises = files.map((file) => processCsv(file));
  try {
    await Promise.all(promises);
    const content = `export default data = () => ${JSON.stringify(data, null, 4)};`;
    fs.writeFileSync(path.join(jsonPath, "data.js"), content);
    console.log("All files processed, data written to data.js");
  } catch (error) {
    console.error("Error processing CSV files:", error);
  }
}

processAllCsvFiles();
