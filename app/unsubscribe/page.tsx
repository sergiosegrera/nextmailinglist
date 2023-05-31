import { PrismaClient } from "@prisma/client";

async function handleSubmit(data: FormData) {
  "use server";

  const prisma = new PrismaClient();

  const id = data.get("id")?.toString();

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

export default function Unsubscribe({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  return (
    <>
      <header className="flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-3xl font-bold text-green-500">Next Mailing List</h1>
      </header>
      <main className="flex flex-col py-8 px-4 gap-8">
        {searchParams.id && (
          <>
            <h2 className="text-2xl font-semibold text-gray-500 text-center">
              You are about to unsubscribe from the mailing list.
            </h2>
            <form
              className="flex flex-col gap-4 items-center"
              action={handleSubmit}
            >
              <input type="hidden" name="id" value={searchParams.id} />
              <input
                type="submit"
                value="Unsubscribe me"
                className="bg-green-500 cursor-pointer py-3 px-4 rounded-sm text-white font-semibold hover:bg-green-600 transition-colors align-center"
              />
            </form>
          </>
        )}
        {!searchParams.id && (
          <>
            <h2 className="text-2xl font-semibold text-gray-500 text-center">
              You are not subscribed to the mailing list.
            </h2>
          </>
        )}
      </main>
      <footer className="flex items-center justify-center py-8">
        <a
          href="https://github.com/sergiosegrera"
          className="text-gray-500 text-sm"
        >
          sergiosegrera
        </a>
      </footer>
    </>
  );
}
