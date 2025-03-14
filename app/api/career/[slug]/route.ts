import Airtable from "airtable";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const chunksSlug = slug.split("-");
    const recordID = chunksSlug[chunksSlug.length - 1];
    const response = await base("Tuyển dụng").find(recordID);
    const fields = response.fields;
    const jobTypes = Array.isArray(fields["Job Types"])
      ? fields["Job Types"]
      : [];
    const jobCategories = Array.isArray(fields["Job Categories"])
      ? fields["Job Categories"]
      : [];
    const productGroups = Array.isArray(fields["Product Groups"])
      ? fields["Product Groups"]
      : [];

    return new Response(
      JSON.stringify({
        title: fields["Title"],
        tags: [...jobTypes, ...jobCategories, ...productGroups].map((item) =>
          item.trim(),
        ),
        location: Array.isArray(fields["Locations"])
          ? fields["Locations"][0]
          : "",
        description: fields["Description"],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (e) {
    return new Response(JSON.stringify(null), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
