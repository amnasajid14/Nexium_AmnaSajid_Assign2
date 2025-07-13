import * as cheerio from 'cheerio';

export async function scrapeBlogContent(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    
    const paragraphs = $('p')
      .map((_, p) => $(p).text())
      .get()
      .filter(text => text.length > 50); 

    return paragraphs.join('\n\n');
  } catch (error) {
    console.error("Error scraping blog:", error);
    return "Error: Could not scrape blog content.";
  }
}
