// API ROUTE

import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log(request);
  return Response.json({
    ok: true,
  });
};
export const POST = async (request: NextRequest) => {
  const cookies = request.cookies.get("");
  console.log(cookies);
  const data = await request.json(); //body
  return Response.json(data);
};
