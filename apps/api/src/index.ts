import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc/app-router';
import postRoutes from './server/routes/post-routes'
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: () => ({}),
}));

app.use(postRoutes);

app.listen(4030, () => {
  console.log('Server is running on http://localhost:4030');
});
