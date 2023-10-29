import { client } from "@/app/Lib/pg";

export async function POST(req) {
  console.log("LLEGUE")
    const { carnet, password } = await req.json();

    const data = await client.query("SELECT * FROM usuario WHERE carnet = $1 AND password = $2;",[carnet, password]);
    const { rows, rowCount } = data;

    if (rowCount > 0) return Response.json({ result: rows[0] });
    else return new Response("USUARIO NO ENCONTRADO", { status: 404 });
  }



