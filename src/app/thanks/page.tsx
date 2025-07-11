import Link from 'next/link';

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black px-4">
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Obrigado!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Recebemos seu envio com sucesso.
          <br />
          Em breve entraremos em contato.
        </p>
        <Link href="/">
          <span className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition dark:bg-green-600 dark:hover:bg-green-700">
            Voltar para a Home
          </span>
        </Link>
      </div>
    </div>
  );
}
