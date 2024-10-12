import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest Page</h2>;
      <NewsList news={latestNews} />
    </>
  );
}
