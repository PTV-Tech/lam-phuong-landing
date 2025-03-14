import data from "@/data/jobs.json";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const detail = data.find((item) => item.id === slug);
  return new Response(JSON.stringify({ detail }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
