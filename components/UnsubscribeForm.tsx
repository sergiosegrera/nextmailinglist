"use client";
import { unsubscribe } from "@/actions/actions";
import { useState, FormEvent } from "react";

export default function UnsubscribeForm({ userId }: { userId: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<
    "Unsubscribe me" | "Unsubscribing..." | "Unsubscribed"
  >("Unsubscribe me");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
    setStatus("Unsubscribing...");

    const formData = new FormData(event.currentTarget);
    const res = await unsubscribe(formData);

    if (res) {
      setStatus("Unsubscribed");
    }
  };

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={userId} />
      <input
        type="submit"
        value={status}
        disabled={submitted}
        className={`bg-green-500 cursor-pointer py-3 px-4 rounded-sm text-white font-semibold hover:bg-green-600 transition-colors align-center ${
          status === "Unsubscribing..." ? "animate-pulse" : ""
        }`}
      />
    </form>
  );
}
