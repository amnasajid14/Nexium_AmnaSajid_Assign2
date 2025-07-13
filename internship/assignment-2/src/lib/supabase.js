export async function saveToSupabase({ url, summary, urduSummary }) {
  try {
    console.log("📦 Data going to Supabase:", {
      url,
      summary_en: summary,
      summary_ur: urduSummary
    });

    const SUPABASE_URL = 'https://goyyewaimwmcrdxmlooi.supabase.co';
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; 

    const response = await fetch(`${SUPABASE_URL}/rest/v1/summaries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal' 
      },
      body: JSON.stringify({
        url,
        summary_en: summary,
        summary_ur: urduSummary
      })
    });

    const result = await response.text(); 
    console.log("📩 Supabase response status:", response.status);
    console.log("📩 Supabase response body:", result);

    if (!response.ok) {
      throw new Error('Failed to save to Supabase');
    }

    console.log('✅ Saved to Supabase');
  } catch (error) {
    console.error('❌ Supabase Save Error:', error);
  }
}
