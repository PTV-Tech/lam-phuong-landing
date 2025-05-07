export const getLocationsList = async (filterByFormula = "") => {
  const response = await fetch(
    `${process.env.AIRTABLE_BASE_URL}/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_LOCATIONS_TABLE}/listRecords`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({ filterByFormula, fields: ["Name"] }),
    },
  ).then((res) => res.json());
  let locationsMapper: { [key: string]: string } = {};
  for (const record of response.records) {
    locationsMapper[record["id"]] = record["fields"]["Name"];
  }
  return locationsMapper;
};
