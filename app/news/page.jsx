import Link from "next/link";
import React from "react";

import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function page() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
