import { PrismaClient } from "@prisma/client";

async function saveEmail(data: FormData) {
  "use server";

  const email = data.get("email")?.toString();

  if (!email) {
    return new Response("Missing email", { status: 400 });
  }

  const prisma = new PrismaClient();

  // Check if user already exists
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return new Response("User already exists", { status: 400 });
  }

  await prisma.user.create({
    data: {
      email,
    },
  });

  return new Response("User successfully subscribed", { status: 200 });
}

export default function EmailForm() {
  return (
    <form className="flex items-center gap-2" action={saveEmail}>
      <input
        type="email"
        name="email"
        id="email"
        className="p-2 rounded-sm bg-gray-300"
      />
      <button
        type="submit"
        className="p-2 bg-green-500 rounded-sm hover:bg-green-600 text-white"
      >
        Submit
      </button>
    </form>
  );
}
