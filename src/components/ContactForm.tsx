"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full border rounded p-2"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}
