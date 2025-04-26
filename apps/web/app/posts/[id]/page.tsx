'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAPIContext } from "@/context/api-provider";

interface Post {
  id: string;
  userId?: string;
  title: string;
  content: string;
}

export default function PostDetail() {
  const { id } = useParams();
  const { fetchPostById, isLoading } = useAPIContext();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (id && typeof id === "string") {
        const fetchedPost = await fetchPostById(id);
        if (fetchedPost) {
          setPost(fetchedPost);
        }
      }
    };
    loadPost();
  }, [id, fetchPostById]);

  if (isLoading) {
    return (
      <div>
        <span>Loading post...</span>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
      </div>
    );
  }

  return (
    <main>
      <div>
        <h1>{post.title}</h1>
        <div>Posted by User #{post.userId}</div>
      </div>
      <div>{post.content}</div>
    </main>
  );
}
