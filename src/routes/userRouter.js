import express from 'express';

const router = express.Router();

router.get('/registration', (req, res) => {
  res.render('Layout', { });
});
router.get('/authorization', (req, res) => {
  res.render('Layout', { });
});

export default router;
