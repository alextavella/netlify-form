import { netlifyClient } from '@/lib/netlify';

const siteName = 'at-netlify-form';

export async function GET(_: Request) {
  console.log('[netlifyClient]', netlifyClient.host);

  const sites = await netlifyClient.listSites().catch(() => []);
  const site_id = sites.find((site) => site.name === siteName)?.id;

  if (!site_id) {
    return new Response(JSON.stringify({ submissions: [] }));
  }

  const submissions = await netlifyClient.listSiteSubmissions({ site_id }).catch(() => []);

  return new Response(JSON.stringify({ submissions }));
}
