"use client";

import Button from "@/components/forms/Button";
import React from "react";

const DUMMY_POSTS_FROM_DB = [
  {
    id: "1",
    title: "First Post",
    content: "This is the first post",
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the second post",
  },
];

function Dashboard() {
  const [blogPosts, setBlogPosts] = React.useState(DUMMY_POSTS_FROM_DB);

  function addBlogPost() {
    const NEW_CREATED_POST_FROM_DB = {
      id: "3",
      title: "Third Post",
      content: "This is the third post",
    };
    setBlogPosts([...blogPosts, NEW_CREATED_POST_FROM_DB]);
  }

  return (
    <div>
      dashboard
      <Button onClick={addBlogPost}>Klick me</Button>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
