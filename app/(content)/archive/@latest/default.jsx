import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  console.log(latestNews);

  return (
    <>
      <h2>Latest Page</h2>;
      <NewsList news={latestNews} />
    </>
  );
}
