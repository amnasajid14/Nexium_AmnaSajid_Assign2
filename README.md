# 📚 Blog Summariser

This project is a Blog Summariser built using **Next.js 15**, **Supabase**, and **MongoDB**. It extracts blog content from a URL, generates a summary, translates it to Urdu, and saves it.

## 🚀 Features
- 🌐 Enter a blog URL to extract content
- ✍️ English summary generation
- 🌍 Urdu translation of the summary
- 💾 Saves full blog in MongoDB
- 🗃️ Saves summary to Supabase
- 🎨 Responsive UI with Tailwind CSS

## 🛠️ Tech Stack
- Next.js 15
- MongoDB
- Supabase
- Tailwind CSS

## 📦 How to Run Locally
1. Clone this repo
2. Create a `.env` file and add:
    MONGODB_URI=your_mongodb_uri
    SUPABASE_PROJECT_URL=your_project_url
    SUPABASE_ANON_KEY=your_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

3. Run:
```bash
npm install
npm run dev

## 🌐 Live Deployment
Hosted on Vercel:
https://vercel.com/amna-sajids-projects/nexium-amna-sajid-assign2

