import React from "react";

export default function NewdetailLayout({ children, modal }) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}
