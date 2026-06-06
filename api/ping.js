const urls = process.env.PING_URLS
  ? process.env.PING_URLS.split(",").map(url => url.trim())
  : [];

export default async function handler(req, res) {

  const results = [];

  for (const url of urls) {
    try {

      const start = Date.now();

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "User-Agent": "Vercel-Render-KeepAlive"
        }
      });

      const elapsed = Date.now() - start;

      results.push({
        url,
        status: response.status,
        responseTime: `${elapsed}ms`,
        success: true
      });

    } catch (error) {

      results.push({
        url,
        success: false,
        error: error.message
      });

    }
  }

  return res.status(200).json({
    timestamp: new Date().toISOString(),
    total: urls.length,
    results
  });
}
