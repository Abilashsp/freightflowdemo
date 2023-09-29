import database from "./seed";
import _ from "lodash";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("req", req.query);
  const path = req?.query?.path;
  const id = +req?.query?.id - 1;

  let pageSection = database.model
    .filter(
      (r) => r.Page.toLowerCase() === path.split("_").join(" ").toLowerCase()
    )
    .map(({ Section }) => Section.split(" ").join("_"));

  pageSection = _.uniq(pageSection);

  const record = {};
  if (pageSection && pageSection.length) {
    pageSection.map((section) => {
      record[section] = database[section][id];
    });
  }
  res.status(200).json({ pageSection, record });
}
