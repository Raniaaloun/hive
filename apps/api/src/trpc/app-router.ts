import { initTRPC } from '@trpc/server';
import { postRouter } from './routers/post-router';

const t = initTRPC.create();

export const appRouter = t.router({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
