import express from 'express';
const router = express.Router();

import userRoute from './user.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  return router;
};

export default routes;
