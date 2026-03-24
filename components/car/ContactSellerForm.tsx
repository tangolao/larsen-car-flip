"use client";

import { useState } from "react";

type ContactSellerFormProps = {
  carTitle: string;
};

export function ContactSellerForm({ carTitle }: ContactSellerFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    `Hei, jeg er interessert i ${carTitle}.`,
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage(`Hei, jeg er interessert i ${carTitle}.`);
  }

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Kontakt selger</h2>
      <p className="mt-2 text-sm text-gray-600">
        Send en henvendelse om denne bilen.
      </p>

      {isSubmitted && (
        <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
          Meldingen ble sendt.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Navn
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none text-gray-900 focus:border-gray-900"
            placeholder="Skriv navnet ditt"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            E-post
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none text-gray-900 focus:border-gray-900"
            placeholder="navn@epost.no"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Melding
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-[120px] w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            placeholder="Skriv meldingen din"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gray-900 px-6 py-4 text-sm font-semibold text-white hover:bg-gray-800 cursor-pointer"
        >
          Send melding
        </button>
      </form>
    </div>
  );
}
