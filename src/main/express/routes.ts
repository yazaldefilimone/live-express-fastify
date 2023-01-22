import { Router } from 'express';
import { routes } from '../routes';

export const expressRoutes = Router();

expressRoutes.post(routes.route, async (request, response) => {
  try {
    const body = request.body;
    const res = await routes.action().execute(body);
    return response.status(201).json(res);
  } catch (error) {
    return response.status(500).json({ error: error.toString() });
  }
});
