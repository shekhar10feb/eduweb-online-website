const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const fs = require('fs');
const path = require('path');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://eduweb-online-website.onrender.com' });
  const pipeline = sitemap.pipe(createGzip());

  // Add your static routes here
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/api/', changefreq: 'weekly', priority: 0.9 });

  sitemap.end();

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml.gz');
  const writeStream = fs.createWriteStream(sitemapPath);

  streamToPromise(pipeline).then(sm => writeStream.write(sm));
};

generateSitemap().catch(console.error);