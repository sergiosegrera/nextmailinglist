import { PrismaClient } from "@prisma/client";

async function saveEmail(data: FormData) {
  "use server";

  const email = data.get("email");

  if (!email) {
    return;
  }

  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      email: email.toString(),
    },
  });
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
