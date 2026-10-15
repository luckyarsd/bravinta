import { site } from '../lib/data';
export const dynamic = 'force-static';
export default function sitemap() { return [{ url: site.url + '/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]; }
