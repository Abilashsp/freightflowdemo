import database from "./seed";

export default function handler(req, res) {
  console.log("req", req.query);
  const path = req?.query?.path;

  const schemal = database.model.filter(
    (r) => r.Page.toLowerCase() === path.split("_").join(" ").toLowerCase()
  );

  if (schemal.length === 0) return res.status(404);

  res.status(200).json(schemal);
}
