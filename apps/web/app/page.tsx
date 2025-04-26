"use client";

import PostCard from "@/components/post-card";
import { useAPIContext } from "@/context/api-provider";
import { useEffect } from "react";

export default function Home() {
  const { isLoading, fetchPosts, posts } = useAPIContext();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>______ Welcome to The Hive 🐝 ______</h1>
      {posts &&
        posts.map(({ userId, id, title, content }) => (
          <PostCard
            key={id}
            userId={userId}
            id={id}
            title={title}
            content={content}
            loading={isLoading}
          />
        ))}
    </div>
  );
}
