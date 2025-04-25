import express from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../controllers/post-controller';
import { keycloakMiddleware } from '../middlewares/keycloak-middleware';

const router = express.Router();

router.post('/posts', keycloakMiddleware, createPost);

router.get('/posts', getPosts);

router.get('/posts/:id', getPostById);

router.put('/posts/:id', keycloakMiddleware, updatePost);

router.delete('/posts/:id', keycloakMiddleware, deletePost);

export default router;
