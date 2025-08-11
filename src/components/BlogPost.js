import React from "react";

export default function BlogPost({ title, date, summary }) {
  return (
    <div className="blog-post">
      <h4>{title}</h4>
      <p className="date">{date}</p>
      <p>{summary}</p>
      <a href="#">Read more →</a>
    </div>
  );
}
