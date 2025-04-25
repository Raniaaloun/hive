import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc/app-router';
import postRoutes from './server/routes/post-routes'

const app = express();

app.use(express.json());

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: () => ({}),
}));

app.use(postRoutes);

app.listen(4030, () => {
  console.log('Server is running on http://localhost:4030');
});
