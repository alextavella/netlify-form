const siteId = '9658a9c0-e456-417a-a72c-518278cb634a';

export async function GET(_: Request) {
  const submissions = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/submissions`, {
    headers: {
      Authorization: `Bearer ${process.env.NETLIFY_API_KEY}`,
    },
  })
    .then((res) => res.json())
    .catch(() => []);

  return new Response(JSON.stringify({ submissions }));
}
