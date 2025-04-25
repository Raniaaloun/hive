import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { createPostSchema, updatePostSchema } from "../../utils/zod-schemas";
import * as postService from "../../server/services/post-service";

const t = initTRPC.create();

export const postRouter = t.router({
  create: t.procedure.input(createPostSchema).mutation(async ({ input }) => {
    const { title, content } = input;
    const userId = "user123";
    return postService.createPost(title, content, userId);
  }),

  getAll: t.procedure.query(async () => {
    return postService.getPosts();
  }),

  getById: t.procedure.input(z.string().uuid()).query(async ({ input }) => {
    return postService.getPostById(input);
  }),

  update: t.procedure
    .input(
      z.object({
        id: z.string().uuid(),
        ...updatePostSchema.shape,
      })
    )
    .mutation(async ({ input }) => {
      const { id, title, content } = input;
      return postService.updatePost(id, title, content);
    }),

  delete: t.procedure.input(z.string().uuid()).mutation(async ({ input }) => {
    return postService.deletePost(input);
  }),
});
