import { NetlifyAPI } from '@netlify/api';

const siteName = 'at-netlify-form';

export async function GET(_: Request) {
  const netlifyClient = new NetlifyAPI(process.env.NETLIFY_API_KEY);

  const sites = await netlifyClient.listSites().catch(() => []);
  console.log('[sites]', sites);

  const site_id = sites.find((site) => site.name === siteName)?.id;
  console.log('[site_id]', site_id);

  if (!site_id) {
    return new Response(JSON.stringify({ submissions: [] }));
  }

  const submissions = await netlifyClient.listSiteSubmissions({ site_id }).catch(() => []);

  return new Response(JSON.stringify({ submissions }));
}
