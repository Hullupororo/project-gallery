import { Router } from 'express';
import { Album } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  // const albums = await Album.findAll();
  res.render('Layout', {  });
});

export default router;
