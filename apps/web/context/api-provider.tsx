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
  userId: string;
}

interface APIContextType {
  posts: Post[];
  error: Error | null;
  fetchPosts: () => Promise<void>;
  isLoading: boolean;
}

const APIContext = createContext<APIContextType>({
  posts: [],
  error: null,
  fetchPosts: async () => {},
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


  return (
    <APIContext.Provider
      value={{
        posts,
        error,
        fetchPosts,
        isLoading,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export const useAPIContext = () => useContext(APIContext);
