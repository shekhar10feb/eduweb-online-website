// filepath: /server/routes/sitemapRoutes.js

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/sitemap.xml.gz', (req, res) => {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml.gz');
  res.sendFile(sitemapPath);
});

module.exports = router;