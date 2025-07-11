import { NetlifyAPI } from '@netlify/api';

export const netlifyClient = new NetlifyAPI(process.env.NETLIFY_API_KEY);
