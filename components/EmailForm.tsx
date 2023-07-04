"use client";
import { useState, FormEvent } from "react";
import { saveEmail } from "@/actions/actions";

export default function EmailForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"Save" | "Saving..." | "Saved!">("Save");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setStatus("Saving...");

    const formData = new FormData(event.currentTarget);

    const res = await saveEmail(formData);

    if (res) {
      setStatus("Saved!");
      setPending(false);
      return;
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        className={`p-2 rounded-sm bg-gray-300 text-gray-900 ${
          pending ? "animate-pulse" : ""
        }`}
        disabled={pending}
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className={`p-2 bg-green-500 rounded-sm hover:bg-green-600 text-white ${
          pending ? "animate-pulse" : ""
        }`}
        disabled={pending}
      >
        {status}
      </button>
    </form>
  );
}
