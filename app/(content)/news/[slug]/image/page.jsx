import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = getNewsItem(newsItemSlug);

  //? if news Item is undefined we will go to notfound page as we are calling thif Function
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
