"use server";

import { PrismaClient } from "@prisma/client";

// This is the server action that will be called when the form is submitted
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
