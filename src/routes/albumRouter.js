import express from 'express';
import { Album } from '../../db/models';

const router = express.Router();

router.get('/:id', (req, res) => {
  res.render('Layout', { });
});

router.get('/photos/:id ', (req, res) => {
  res.render('Layout', { });
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const albums = await Album.findByPk(id);
  res.render('Layout', { albums });
});

export default router;
