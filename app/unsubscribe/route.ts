import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  // Id string to number
  let idNumber;
  try {
    idNumber = parseInt(id, 10);
  } catch (error) {
    return new Response("Invalid id", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: idNumber },
  });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  await prisma.user.delete({
    where: { id: idNumber },
  });

  return new Response("User successfully unsubscribed", { status: 200 });
}
