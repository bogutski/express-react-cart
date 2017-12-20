import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Index' });
});

routes.get('/1', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default routes;
