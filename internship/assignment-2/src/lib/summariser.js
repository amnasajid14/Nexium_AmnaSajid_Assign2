export function generateStaticSummary(text) {
  
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const summary = lines.slice(0, 3).join('\n'); 
  return summary || "Summary not available.";
}

