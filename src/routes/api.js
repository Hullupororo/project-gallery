import { Router } from 'express';
import bcrypt from 'bcrypt';
import multer from 'multer';
import { User, Album, Photo } from '../../db/models';

const path = require('path');

const router = Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './img');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/profile', upload.single('avatar'), async (req, res, next) => {
  await Photo.create({ albumid: 1, link: req.file.originalname });
  next();
});

router.route('/albums')
  .get(async (req, res) => {
    const allAlbums = await Album.findAll({ where: { status: true }, order: [['id', 'DESC']] });
    res.json(allAlbums);
  })
  .post(async (req, res) => {
    const newAlbum = await Album.create({ title: 'New Album', status: true });
    res.json(newAlbum);
  });

router.route('/photos/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const photos = await Photo.findAll({ where: { albumid: id } });
    res.json(photos);
  });

router.route('/takephoto/:link')
  .get(async (req, res) => {
    res.sendFile(path.join(__dirname, `../../img/${req.params.link}`));
  });

router.route('/auth/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

router.route('/auth/registration')
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    if (name && password && email) {
      try {
        const user = await User.create({
          ...req.body, password: await bcrypt.hash(password, 10),
        });
        const currUser = { id: user.id, name: user.name };
        req.session.user = currUser;
        return res.json(currUser);
      } catch {
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(401);
    }
  });

router.route('/auth/authorization')
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && await bcrypt.compare(password, user.password)) {
        const currUser = { id: user.id, name: user.name };
        req.session.user = currUser;
        return res.json(currUser);
      }
      return res.sendStatus(401);
    }
    return res.sendStatus(401);
  });
export default router;
