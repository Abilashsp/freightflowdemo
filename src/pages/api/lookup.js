import database from "./seed";

export default function handler(req, res) {
  const fieldName = req?.query?.field;
  const fields = database.model.filter(
    (r) => r["Field Name"].toLowerCase() === fieldName.toLowerCase()
  );
  let values = fields.map(({ Section }) => {
    const path = Section.split(" ").join("_");
    return database[path]?.map((r) => r[fieldName]);
  });
  values = [...new Set(values.flat())]; // Unique
  res.status(200).json(values);
}
