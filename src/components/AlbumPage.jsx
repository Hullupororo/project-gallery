import React, { useState } from 'react';
import Carousel from 'better-react-carousel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const [albums, setAlbums] = useState({});

  const addAlbumHandler = (e) => {
    e.preventDefault();
    fetch('/api/newalbum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => {
        setAlbums((prev) => [...prev, res.data]);
      });
  };

  const pics = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg', 'https://i.pinimg.com/736x/2c/13/71/2c1371cbeae17a2cd4b87b356d5b156f--ulm-cat-s.jpg', 'https://i.pinimg.com/originals/ce/0e/ae/ce0eae034b555dd6567f7cd13498956f.jpg', 'https://i.ytimg.com/vi/AfdR003knes/sddefault.jpg', 'https://i.ytimg.com/vi/AfdR003knes/sddefault.jpg'];
  return (
    <>
      <>
        <Button
          variant="dark"
          onClick={addAlbumHandler}
        >
          Добавить альбом

        </Button>
        <h1>Мои альбомы</h1>
        <Carousel cols={2} rows={2} gap={20} loop>
          {pics.map((el) => (
            <Carousel.Item>
              <Link to="/dsfgfsfgds">
                <img width="100%" height="500px" src={el} alt="text1" />
              </Link>
              <div>album.title</div>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
      <>
        <h1>Все альбомы</h1>
        <Carousel cols={2} rows={2} gap={20} loop>
          {pics.map((el) => (
            <Carousel.Item>
              <img width="100%" height="500px" src={el} alt="text1" />
              <div>album.title</div>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    </>
  );
}


import { Router } from 'express';
import { Album } from '../../db/models';
// import { deleteProtect } from '../middlewares';

const router = Router();

router.route('/newalbum')
  .post(async (req, res) => {
    const newAlbum = await Album.create(req.body);
    res.json(newAlbum);
  });
