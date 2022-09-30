import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';
import { Button } from 'react-bootstrap';
import MyCarousel from './MyCarousel';

export default function MainPage({
  currUser, setAllAlbums, allAlbums, myAlbums, setMyAlbums,
}) {
  useEffect(() => {
    fetch('/api/albums')
      .then((res) => res.json())
      .then((data) => {
        setAllAlbums(data);
        setMyAlbums(data.filter((el) => el.userid === currUser.id));
      });
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
        <div className="head">
          <h1 className="myalbum">My Albums</h1>
          <Button
            className="addButton"
            variant="dark"
            onClick={addAlbumHandler}
          />
        </div>
        <Carousel className="carousel" cols={3} rows={1} gap={20} loop>

          {myAlbums.length !== 0
            ? (myAlbums.map((album) => (
              <Carousel.Item>

                <MyCarousel key={album.id} album={album} />

                {' '}
              </Carousel.Item>
            )))
            : (<Carousel.Item><div className="none"> No Albums</div></Carousel.Item>)}
        </Carousel>
      </>
      )}
      <div className="head">
        <h1>All Albums </h1>
      </div>
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
