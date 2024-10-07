"use client";

import React from "react";

export default function FilterError({ error }) {
  return (
    <div id="erro">
      <h2>An Erro Occured</h2>
      <p>{error.message}</p>
    </div>
  );
}
