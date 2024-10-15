import React from "react";
import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

export default async function page() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </>
  );
}
