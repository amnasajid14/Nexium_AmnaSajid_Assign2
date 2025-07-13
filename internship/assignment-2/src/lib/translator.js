const dictionary = {
  "example": "مثال",
  "domain": "ڈومین",
  "use": "استعمال",
  "permission": "اجازت",
  "documents": "دستاویزات"
  
};

export function translateToUrdu(text) {
  try {
    console.log("📝 Text to translate:", text);
    const words = text.split(/\s+/);
    const translated = words.map(word => {
      const cleaned = word.toLowerCase().replace(/[.,]/g, '');
      return dictionary[cleaned] || word;
    });
    const translatedText = translated.join(' ');
    console.log("🔍 Translated Urdu (dictionary):", translatedText);
    return translatedText;
  } catch (error) {
    console.error('❌ Translation error:', error.message);
    return 'Translation failed';
  }
}
