import UnsubscribeForm from "@/components/UnsubscribeForm";
import Link from "next/link";

export default function Unsubscribe({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  return (
    <>
      <header className="flex flex-col items-center justify-center py-16 px-4">
        <Link href="/">
          <h1 className="text-3xl font-bold text-green-500">
            Next Mailing List
          </h1>
        </Link>
      </header>
      <main className="flex flex-col py-8 px-4 gap-8">
        {searchParams.id && (
          <>
            <h2 className="text-2xl font-semibold text-gray-500 text-center">
              You are about to unsubscribe from the mailing list.
            </h2>
            <UnsubscribeForm userId={searchParams.id} />
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
