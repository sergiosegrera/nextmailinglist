import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  await prisma.user.delete({
    where: { id },
  });

  return new Response("User successfully unsubscribed", { status: 200 });
}
