import EmailForm from "@/components/EmailForm";
import Number from "@/components/Number";

export default function Home() {
  return (
    <>
      <main className="flex flex-col container items-stretch mx-auto py-8 px-4 gap-16">
        <section className="flex flex-col items-center justify-center gap-2 py-16">
          <h1 className="text-7xl font-bold text-green-500">
            Next Mailing List
          </h1>
          <h2 className="text-2xl font-semibold text-gray-500">
            A simple mailing list site built with Next 13
          </h2>
        </section>
        <section className="flex flex-col gap-4 justify-center">
          <div className="bg-gray-100 flex rounded-sm flex-row p-4 gap-4">
            <Number number={1} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-green-700">
                Ready to go!
              </h3>
              <p>Just modify this page to your liking and deploy!</p>
            </div>
          </div>
          <div className="bg-gray-100 flex rounded-sm flex-row p-4 gap-4">
            <Number number={2} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-green-700">
                Built with Next 13 + Prisma
              </h3>
              <p>
                Next Mailing List is built with Next 13 and Prisma. It uses the
                new server actions to handle the email submission. This results
                in a simple, fast and secure site.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 flex rounded-sm flex-row p-4 gap-4">
            <Number number={3} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-green-700">
                Analytics ready
              </h3>
              <p>
                Next Mailing List provides a Google Analytics component that
                will automatically track page views. Just add your tracking ID
                to the <code>.env</code> file and you&apos;re good to go!
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 bg-gray-100 py-6 px-4 rounded-sm">
          <h2 className="text-2xl font-semibold text-green-700">
            Sign up for the mailing list
          </h2>
          <p className="font-semibold text-center">
            Receive updates on new features, updates and other cool stuff!
          </p>
          <EmailForm />
        </section>
      </main>
      <footer className="flex items-center justify-center py-8 px-4">
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
