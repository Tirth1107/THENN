import fs from 'fs';
import path from 'path';

const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const KEY_FILE_PATH = path.resolve('public/5f1b8c8d8c8d8c8d8c8d8c8d8c8d8c8d.txt');
const INDEXNOW_API = 'https://api.indexnow.org/indexnow';

async function pingIndexNow() {
  console.log('🚀 Starting IndexNow Ping Job...');

  // 1. Check if files exist
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Error: sitemap.xml not found at', SITEMAP_PATH);
    return;
  }
  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error('❌ Error: Key file not found at', KEY_FILE_PATH);
    return;
  }

  // 2. Read sitemap and key
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const key = fs.readFileSync(KEY_FILE_PATH, 'utf-8').trim();

  // 3. Extract URLs using Regex
  const urlRegex = /<loc>(https?:\/\/[^\s<]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = urlRegex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }

  if (urls.length === 0) {
    console.warn('⚠️ Warning: No URLs found in sitemap.xml');
    return;
  }

  console.log(`🔗 Found ${urls.length} URLs in sitemap.xml.`);

  // 4. Construct payload
  const payload = {
    host: 'www.thenn.in',
    key: key,
    keyLocation: `https://www.thenn.in/5f1b8c8d8c8d8c8d8c8d8c8d8c8d8c8d.txt`,
    urlList: urls,
  };

  // 5. Send POST request
  try {
    const response = await fetch(INDEXNOW_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`✅ Success! IndexNow ping completed. ${urls.length} URLs submitted to search engines.`);
    } else {
      const errorText = await response.text();
      console.error(`❌ Failed to ping IndexNow API. Status: ${response.status}. Response: ${errorText}`);
    }
  } catch (error) {
    console.error('❌ Error occurred while pinging IndexNow API:', error.message);
  }
}

pingIndexNow();
