import React from 'react';
import Carousel from 'better-react-carousel';

export default function MyCarousel({ album }) {
  return (
    <Carousel.Item>
      {/* <img width="100%" height="500px" src={el} alt="text1" /> */}
      <div>{album.title}</div>
    </Carousel.Item>
  );
}
