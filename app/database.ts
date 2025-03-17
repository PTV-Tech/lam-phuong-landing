import Airtable from "airtable";

export const database = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");
