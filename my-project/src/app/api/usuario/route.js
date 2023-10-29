import { NextRequest } from "next/server";

import { client } from '@/app/Lib/pg';
/**
 * VERBOS HTTP
 * 
 * GET
 * POST
 * DELETE
 * PUT 
 * PATCH
 * OPTIONS
 * 
 */

/**
 * @param {NextRequest} request
 */

export async function GET(request){
  const data = await client.query('SELECT * FROM usuario;')
  const {rows, rowCount} = data 
  
if(rowCount > 0) return Response.json({ result: rows })
else 
return new Response('', {status: 404})

}


