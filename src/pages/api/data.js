import database from "./seed";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("req", req.query);
  const path = req?.query?.path;
  const data = database[path];
  if (!data) return res.status(404);

  const schemal = database.model.filter(
    (r) => r.Section.toLowerCase() === path.split("_").join(" ").toLowerCase()
  );

  const result = { schemal, data };
  console.log("result", schemal);

  res.status(200).json(result);
}
