import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyCarousel from './MyCarousel';

// import { Button, Form } from 'react-bootstrap';
// import Albums from '../components/Albums';

export default function MainPage({ currUser }) {
  const [myAlbums, setMyAlbums] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  useEffect(() => {
    fetch('/api/albums')
      .then((res) => res.json())
      .then((data) => setAllAlbums(data));
  }, []);

  const addAlbumHandler = (e) => {
    e.preventDefault();
    fetch('/api/albums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setAllAlbums((prev) => [data, ...prev]));
  };

  return (
    <>

      {currUser.id
      && (
      <>
        <Button
          variant="dark"
          onClick={addAlbumHandler}
        >
          Добавить альбом

        </Button>
        <h1>Мои альбомы</h1>
        <Carousel cols={3} rows={1} gap={20} loop>
          {allAlbums.map((album) => (
            <Carousel.Item>
              <MyCarousel key={album.id} album={album} />
            </Carousel.Item>
          ))}
        </Carousel>
      </>
      )}

      <h1>Все альбомы</h1>
      <Carousel cols={3} rows={1} gap={20} loop>
        {allAlbums.map((album) => (
          <Carousel.Item>
            {/* <img width="100%" height="500px" src={el} alt="text1" /> */}
            <MyCarousel key={album.id} album={album} />
          </Carousel.Item>
        ))}
      </Carousel>

    </>
  );
}
