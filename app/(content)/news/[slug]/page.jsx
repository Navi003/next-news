import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { getNewsItem } from "@/lib/news";
export default async function page({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);
  //? if news Item is undefined we will go to notfound page as we are calling thif Function
  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
