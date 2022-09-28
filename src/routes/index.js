import React from 'react';
import { Router } from 'express';
// import { Entry } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  // const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  res.render('Layout', { });
});

export default router;
