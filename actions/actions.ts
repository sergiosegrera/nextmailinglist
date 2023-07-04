// TODO: Better server side validation & responses

"use server";

import { PrismaClient } from "@prisma/client";

export async function saveEmail(data: FormData) {
  const email = data.get("email")?.toString();

  if (!email) {
    return false;
  }

  const prisma = new PrismaClient();

  // Check if user already exists
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return true;
  }

  await prisma.user.create({
    data: {
      email,
    },
  });

  return true;
}

export async function unsubscribe(data: FormData) {
  const prisma = new PrismaClient();

  const id = data.get("id")?.toString();

  if (!id) {
    return false;
  }

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return false;
  }

  await prisma.user.delete({
    where: { id },
  });

  return true;
}
