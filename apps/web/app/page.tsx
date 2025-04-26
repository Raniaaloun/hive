"use client";

import CreatePostButton from "@/components/create-post-button";
import CreatePostModal from "@/components/modal";
import PostCard from "@/components/post-card";
import { useAPIContext } from "@/context/api-provider";
import { useEffect, useState } from "react";

export default function Home() {
  const { isLoading, fetchPosts, posts } = useAPIContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1>Welcome to The Hive 🐝 </h1>
      <CreatePostButton onClick={handleModalOpen} />
      {isModalOpen && <CreatePostModal onClose={handleModalClose} />}

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
