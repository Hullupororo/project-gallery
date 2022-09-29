import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function OneAlbum() {
  const [albums, setAlbums] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/photos/${id}`);
  }, []);

  // buttons

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

  return (
    <>
      <>
        <div className="buttons">

          <Button
            variant="dark"
            onClick={addAlbumHandler}
          >
            Добавить фото

          </Button>
          <Button
            variant="dark"
            onClick={addAlbumHandler}
          >
            Редактировать альбом

          </Button>
        </div>
        <h1>Фотографии</h1>
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

    </>
  );
}
// import { deleteProtect } from '../middlewares';
