import { NextRequest } from "next/server";
import { client } from "@/app/Lib/pg";

export async function GET(request) {
  const data = await client.query("SELECT * FROM producto;");
  const { rows, rowCount } = data;

  if (rowCount > 0) return Response.json({ result: rows });
  else return new Response("", { status: 404 });
}

export async function POST(req, res) {
  const { nameproduct, amount, price} = await req.json();

  //VALIDAMOS QUE NO EXISTE EL PRODUCTO
  const isExistUser = await client.query(
    "SELECT * FROM producto where producto.nombre_producto = $1",
    [nameproduct]
  );
  if (isExistUser.rowCount > 0) {
    return new Response("PRODUCTO YA GUARDADO, INTENTE CON OTRO.", {
      status: 409,
    });
  }
  await client.query(
    "INSERT INTO producto ( nombre_producto, cantidad_producto, precio_producto) VALUES ($1, $2, $3)",
    [nameproduct, amount, price]
  );

  return new Response("PRODUCTO CREADO!", { status: 201 });
}
