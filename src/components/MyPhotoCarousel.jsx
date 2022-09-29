import React from 'react';
import Carousel from 'better-react-carousel';
import { Link } from 'react-router-dom';

export default function MyPhotoCarousel({ photo }) {
  console.log(photo);
  return (
    <Link to="/">
      <Carousel.Item>
        <div><img width="100%" height="300px" src={`http://localhost:3000/api/takephoto/${photo.link}`} alt="1" /></div>
      </Carousel.Item>
    </Link>
  );
}
