"use client";

import CreatePostButton from "@/components/create-post-button";
import Modal, { Post } from "@/components/modal";
import PostCard from "@/components/post-card";
import { useAPIContext } from "@/context/api-provider";
import { useAuth } from "@/context/auth-provider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isLoading, fetchPosts, posts, deletePost } = useAPIContext();
  const { isAuthenticated, keycloak } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setPostToEdit(null);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (postId: number) => {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      setPostToEdit(post);
      handleModalOpen();
    }
  };

  const handleDelete = async (postId: number) => {
    if (!keycloak.token) return;
    try {
      await deletePost(postId, keycloak.token);
      console.log(`Post with ID: ${postId} deleted`);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleCardClick = (postId: number) => {
    router.push(`/post/${postId}`);
  };

  return (
    <div>
      <h1>Welcome to The Hive 🐝</h1>
      {isAuthenticated && <CreatePostButton onClick={handleModalOpen} />}
      {isModalOpen && <Modal onClose={handleModalClose} postToEdit={postToEdit} />}

      {posts &&
        posts.map(({ userId, id, title, content }) => (
          <PostCard
            key={id}
            userId={userId}
            id={id}
            title={title}
            content={content}
            loading={isLoading}
            onEdit={() => handleEdit(id)}
            onDelete={() => handleDelete(id)}
            canEditOrDelete={keycloak?.subject === userId}
            onCardClick={() => handleCardClick(id)}
          />
        ))}
    </div>
  );
}
