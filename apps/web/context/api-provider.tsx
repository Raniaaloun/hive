"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface Post {
  id: number;
  title: string;
  content: string;
  userId?: string;
}

interface APIContextType {
  posts: Post[];
  error: Error | null;
  fetchPosts: () => Promise<void>;
  createPost: (post: Omit<Post, "id">, token: string) => Promise<void>;
  updatePost: (id: number, post: Partial<Post>, token: string) => Promise<void>;
  deletePost: (id: number, token: string) => Promise<void>;
  isLoading: boolean;
}

const APIContext = createContext<APIContextType>({
  posts: [],
  error: null,
  fetchPosts: async () => {},
  createPost: async () => {},
  updatePost: async () => {},
  deletePost: async () => {},
  isLoading: false,
});

APIContext.displayName = "APIContext";

export function APIProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/posts`);

      if (!response.ok) {
        throw new Error(`${response.status} - Error fetching posts.`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching posts:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createPost = useCallback(
    async (post: Omit<Post, "id">, token: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(post),
        });

        if (!response.ok) {
          throw new Error(`${response.status} - Error creating post.`);
        }

        await fetchPosts();
      } catch (err) {
        setError(err as Error);
        console.error("Error creating post:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchPosts]
  );

  const updatePost = useCallback(
    async (id: number, updatedFields: Partial<Post>, token: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/posts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedFields),
        });

        if (!response.ok) {
          throw new Error(`${response.status} - Error updating post.`);
        }

        await fetchPosts();
      } catch (err) {
        setError(err as Error);
        console.error("Error updating post:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchPosts]
  );

  const deletePost = useCallback(
    async (id: number, token: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/posts/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`${response.status} - Error deleting post.`);
        }

        await fetchPosts();
      } catch (err) {
        setError(err as Error);
        console.error("Error deleting post:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchPosts]
  );

  return (
    <APIContext.Provider
      value={{
        posts,
        error,
        fetchPosts,
        createPost,
        updatePost,
        deletePost,
        isLoading,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export const useAPIContext = () => useContext(APIContext);
