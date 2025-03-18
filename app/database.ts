import Airtable from "airtable";

export const database = new Airtable().base(process.env.BASE_ID || "");
