import { NextRequest } from "next/server";
import { client } from "@/app/Lib/pg";

export async function GET(request) {
  const data = await client.query("SELECT * FROM producto;");
  const { rows, rowCount } = data;

  if (rowCount > 0) return Response.json({ result: rows });
  else return new Response("", { status: 404 });
}

export async function POST(req, res) {
  const { name, lastname, license, password } = await req.json();

  //VALIDAMOS QUE NO EXISTE EL USUARIO
  const isExistUser = await client.query(
    "SELECT * FROM usuario where usuario.carnet = $1",
    [license]
  );
  if (isExistUser.rowCount > 0) {
    return new Response("CARNET YA GUARDADO, INTENTE CON OTRO.", {
      status: 409,
    });
  }
  await client.query(
    "INSERT INTO usuario ( nombre_usuario, apellido_usuario, carnet, password) VALUES ($1, $2, $3, $4)",
    [name, lastname, license, password]
  );

  return new Response("USUARIO CREADO!", { status: 201 });
}
