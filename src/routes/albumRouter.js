import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
  res.render('Layout', { });
});

router.get('/edit/:id', (req, res) => {
  res.render('Layout', { });
});

router.get('/photos/:id ', (req, res) => {
  res.render('Layout', { });
});

export default router;
