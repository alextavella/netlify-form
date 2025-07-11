const form_id = '6871212d2eebf00008d8d6a2';

export async function GET(_: Request) {
  const submissions = await fetch(`https://api.netlify.com/api/v1/forms/${form_id}/submissions`, {
    headers: {
      Authorization: `Bearer ${process.env.NETLIFY_API_KEY}`,
    },
  })
    .then((res) => res.json())
    .catch(() => []);

  return new Response(JSON.stringify({ submissions }));
}
