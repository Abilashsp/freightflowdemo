import database from "./seed";

export default function handler(req, res) {
  let dataTypes = database.model.map((r) => r["Data Type"]);
  dataTypes = [...new Set(dataTypes)];
  res.status(200).json(dataTypes);
}
