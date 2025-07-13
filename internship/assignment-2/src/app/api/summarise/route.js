// app/api/summarise/route.js
import { scrapeBlogContent } from '@/lib/scraper';
import { generateStaticSummary } from '@/lib/summariser';
import { translateToUrdu } from '@/lib/translator';
import { saveToMongoDB } from '@/lib/mongo';
import { saveToSupabase } from '@/lib/supabase';

export async function POST(req) {
  const { url } = await req.json();

  if (!url) {
    return Response.json({ error: "Blog URL is required" }, { status: 400 });
  }

  const blogText = await scrapeBlogContent(url);

  const summary = generateStaticSummary(blogText);

  const urduSummary = translateToUrdu(summary);

  await saveToMongoDB({ url, blogText });

  await saveToSupabase({ url, summary, urduSummary });

  return Response.json({ summary, urduSummary });
}
