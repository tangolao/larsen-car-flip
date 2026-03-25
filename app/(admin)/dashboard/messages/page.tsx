export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { DeleteButton } from "@/components/DeleteButton";
import { DateText } from "@/components/DateText";
import Link from "next/link";
export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Admin
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Kundehenvendelser
        </h1>

        <p className="mt-3 text-gray-600">
          Oversikt over meldinger sendt fra kontaktskjemaet.
        </p>

        <Link
          href="/dashboard"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Tilbake til dashboard
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          {messages.length === 0 ? (
            <div className="p-8 text-gray-600">Ingen meldinger funnet.</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {messages.map((message) => (
                <div key={message.id} className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between ">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {message.name}
                      </h2>
                      <p className="text-sm text-gray-600">{message.email}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">
                        <DateText date={message.createdAt} />
                      </span>

                      <DeleteButton id={message.id} />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-500">Bil</p>
                    <p className="text-gray-900">{message.carTitle}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-500">Melding</p>
                    <p className="mt-1 whitespace-pre-line text-gray-800">
                      {message.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
