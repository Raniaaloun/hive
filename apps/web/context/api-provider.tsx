"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  userId?: string;
}

interface APIContextType {
  posts: Post[];
  error: Error | null;
  fetchPosts: () => Promise<void>;
  fetchPostById: (id: string) => Promise<Post | null>;
  createPost: (post: Omit<Post, "id" | "userId">, token: string) => Promise<void>;
  updatePost: (id: string, post: Partial<Post>, token: string) => Promise<void>;
  deletePost: (id: string, token: string) => Promise<void>;
  isLoading: boolean;
}

const APIContext = createContext<APIContextType>({
  posts: [],
  error: null,
  fetchPosts: async () => {},
  fetchPostById: async (): Promise<Post | null> => {
    return null;
  },
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
      const response = await fetch('/posts');

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

  const fetchPostById = useCallback(async (id: string): Promise<Post | null> => {
    try {
      setIsLoading(true);
      console.log('id: ', id);

      const response = await fetch(`/posts/${id}`);

      console.log('response: ', response);

      if (!response.ok) {
        throw new Error(`${response.status} - Error fetching post by ID.`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching post by ID:", err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);



  const createPost = useCallback(
    async (post: Omit<Post, "id">, token: string) => {
      try {
        setIsLoading(true);
        const response = await fetch('/posts', {
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
    async (id: string, updatedFields: Partial<Post>, token: string) => {
      try {
        setIsLoading(true);
        const response = await fetch('/posts/${id}', {
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
    async (id: string, token: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(`/posts/${id}`, {
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
        fetchPostById,
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
