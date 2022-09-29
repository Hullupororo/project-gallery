import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
  res.render('Layout', { });
});


export default router;
