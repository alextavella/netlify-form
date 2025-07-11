// const siteName = 'at-netlify-form';
const siteId = '9658a9c0-e456-417a-a72c-518278cb634a';

export async function GET(_: Request) {
  // const sites = await netlifyClient.listSites().catch(() => []);
  // const site_id = sites.find((site) => site.name === siteName)?.id;

  // if (!site_id) {
  //   return new Response(
  //     JSON.stringify({
  //       error: 'Site not found',
  //     }),
  //     { status: 404 }
  //   );
  // }

  // const submissions = await netlifyClient.listSiteSubmissions({ site_id }).catch(() => []);

  const submissions = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/submissions`, {
    headers: {
      Authorization: `Bearer ${process.env.NETLIFY_API_KEY}`,
    },
  }).then((res) => res.json());

  return new Response(JSON.stringify({ submissions }));
}
