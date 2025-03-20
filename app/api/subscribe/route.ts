import Airtable from "airtable";
import { database } from "@/app/database";

export async function POST(request: Request) {
  const { email } = await request.json();
  try {
    await database(process.env.SUBSCRIBERS_TABLE || "").create([
      {
        fields: { Email: email },
      },
    ]);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
