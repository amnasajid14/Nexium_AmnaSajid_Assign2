"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [summaryEn, setSummaryEn] = useState("");
  const [summaryUr, setSummaryUr] = useState("");

  const handleSummarise = async () => {
    setLoading(true);
    setSummaryEn("");
    setSummaryUr("");

    try {
      const res = await fetch("/api/summarise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setSummaryEn(data.summary);
      setSummaryUr(data.urduSummary);
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 p-6">
      <div className="max-w-2xl mx-auto space-y-8 backdrop-blur-sm bg-white/50 rounded-2xl shadow-lg p-8 border border-white/30">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
           AI BLOG SUMMARISER
        </h1>

        <div className="space-y-4">
          <Label htmlFor="url" className="text-lg text-gray-700">Enter Blog URL</Label>
          <Input
            id="url"
            placeholder="https://example.com/blog"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-white bg-opacity-70 backdrop-blur rounded-xl"
          />
          <Button
            onClick={handleSummarise}
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-2 px-4 rounded-xl"
          >
            {loading ? "Summarising..." : "Summarise Blog"}
          </Button>
        </div>

        {summaryEn && (
          <Card className="bg-white/60 backdrop-blur border border-white/30 shadow-md rounded-xl">
            <CardContent className="p-5">
              <h2 className="text-xl font-bold text-purple-800 mb-3">📝 English Summary</h2>
              <p className="text-gray-800 leading-relaxed">{summaryEn}</p>
            </CardContent>
          </Card>
        )}

        {summaryUr && (
          <Card className="bg-white/60 backdrop-blur border border-white/30 shadow-md rounded-xl">
            <CardContent className="p-5">
              <h2 className="text-xl font-bold text-green-800 mb-3">📝 Urdu Summary</h2>
              <p className="text-gray-800 leading-relaxed">{summaryUr}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
