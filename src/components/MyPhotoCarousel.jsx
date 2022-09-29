import React from 'react';
import Carousel from 'better-react-carousel';

export default function MyPhotoCarousel({ photo }) {
  return (
    <Carousel.Item>
      <img width="100%" height="500px" src={photo.link} alt="text1" />
    </Carousel.Item>
  );
}
