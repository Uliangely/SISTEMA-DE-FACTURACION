import { client } from "@/app/Lib/pg";

export async function POST(req) {
    const { identificationDocument} = await req.json();

    const data = await client.query("SELECT * FROM cliente WHERE cedula = $1;",[identificationDocument]);
    const { rows, rowCount } = data;

    if (rowCount > 0) return Response.json({ result: rows[0] });
    else return new Response("CLIENTE NO ENCONTRADO", { status: 404 });
  }


