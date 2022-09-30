import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';
import { Button } from 'react-bootstrap';
import MyCarousel from './MyCarousel';

export default function MainPage({
  currUser, setAllAlbums, allAlbums, myAlbums, setMyAlbums,
}) {
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
      .then((data) => {
        setAllAlbums((prev) => [data, ...prev]);
        setMyAlbums((prev) => [data, ...prev]);
      });
  };
  return (
    <>
      {currUser.id
      && (
      <>
        <Button
          className="addButton"
          variant="dark"
          onClick={addAlbumHandler}
        />
        <h1 className="myalbum">Мои альбомы</h1>
        <Carousel cols={3} rows={1} gap={20} loop>
          {myAlbums.map((album) => (
            <Carousel.Item>
              {myAlbums.length !== 0
                ? (<MyCarousel key={album.id} album={album} />)
                : (<div className="none" />)}
              {' '}
              (// Даша это тебе задать высоту)
            </Carousel.Item>
          ))}
        </Carousel>
      </>
      )}

      <h1>Все альбомы</h1>
      <Carousel cols={3} rows={1} gap={20} loop>
        {allAlbums.map((album) => (
          <Carousel.Item>
            <MyCarousel key={album.id} album={album} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
