export async function GET(_: Request) {
  return new Response(
    JSON.stringify({
      NETLIFY_API_KEY: process.env.NETLIFY_API_KEY?.slice(0, 10) + '***********',
    })
  );
}
