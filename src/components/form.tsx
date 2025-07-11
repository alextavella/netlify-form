import { EditIcon } from 'lucide-react';

export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      action="/thanks"
      className="flex flex-col space-y-4 w-96 p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-md"
    >
      <input type="hidden" name="form-name" value="contact" />

      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 inline-flex gap-2 items-center">
        <EditIcon /> Contact
      </h2>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
        >
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Your Message"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md  transition-colors duration-200"
      >
        Send
      </button>
    </form>
  );
}
