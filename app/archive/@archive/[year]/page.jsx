import NewsList from "@/components/NewsList";
import React from "react";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
