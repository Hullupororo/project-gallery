import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import MyPhotoCarousel from './MyPhotoCarousel';

export default function OneAlbum() {
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
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
          {photos.map((photo) => (
            <Carousel.Item>
              <MyPhotoCarousel key={photo.id} photo={photo} />
            </Carousel.Item>
          ))}
        </Carousel>
      </>

    </>
  );
}
