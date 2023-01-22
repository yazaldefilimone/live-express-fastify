import express from 'express';
import { expressRoutes } from './routes';
export const app = express();
app.use(express.json());
app.use(expressRoutes);
