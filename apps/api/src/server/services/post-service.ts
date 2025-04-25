import { Post } from "../../models";

export const createPost = async (title: string, content: string, userId: string) => {
  return Post.create({ title, content, userId });
};

export const getPosts = async () => {
  return Post.findAll();
};

export const getPostById = async (id: string) => {
  return Post.findByPk(id);
};

export const updatePost = async (id: string, title?: string, content?: string) => {
  const post = await Post.findByPk(id);
  if (!post) throw new Error('Post not found');
  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;
  return post.save();
};

export const deletePost = async (id: string) => {
  const post = await Post.findByPk(id);
  if (!post) throw new Error('Post not found');
  return post.destroy();
};
