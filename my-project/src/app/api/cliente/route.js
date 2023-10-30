import { client } from "@/app/Lib/pg";

export async function GET(request) {
  const data = await client.query("SELECT * FROM cliente;");
  const { rows, rowCount } = data;

  if (rowCount > 0) return Response.json({ result: rows });
  else return new Response("", { status: 404 });
}

export async function POST(req, res) {
  const { name, lastname, identificationDocument, phone, address } = await req.json();

  //VALIDAMOS QUE NO EXISTE EL CLIENTE
  const isExistUser = await client.query(
    "SELECT * FROM cliente where cliente.cedula = $1",
    [identificationDocument]
  );
  if (isExistUser.rowCount > 0) {
    return new Response("CLIENTE YA GUARDADO, INTENTE CON OTRO.", {
      status: 409,
    });
  }
  await client.query(
    "INSERT INTO cliente ( nombre, apellido, cedula, numero, direccion) VALUES ($1, $2, $3, $4, $5)",
    [name, lastname, identificationDocument, phone, address]
  );

  return new Response("CLIENTE CREADO!", { status: 201 });
}
