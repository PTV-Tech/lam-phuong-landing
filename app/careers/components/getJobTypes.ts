"use server";

import Airtable from "airtable";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

export const getJobTypes = async () => {
  return base("tblgnTej3UhGhdXiT")
    .select({
      view: "Grid view",
      fields: ["fldrDEZjBskgGXFem"],
      filterByFormula: "{flde2VaMA29XeJVUe}='Active'",
      returnFieldsByFieldId: true,
    })
    .firstPage()
    .then(
      (data) =>
        data.map(({ fields, id }) => ({
          name: fields["fldrDEZjBskgGXFem"],
        })) as { name: string }[],
    );
};
