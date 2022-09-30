import React from 'react';
import Carousel from 'better-react-carousel';
import { Link } from 'react-router-dom';

export default function MyCarousel({ album }) {
  return (
    <>
      <h3>{album.title}</h3>
      <Link to={`album/${album.id}`}>
        <Carousel.Item>
          <div>
            <img
              width="100%"
              height="300px"
              src={album.Photos && album.Photos.length !== 0
                ? (`http://localhost:3000/api/takephoto/${album.Photos[0]?.link}`)
                : ('https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg')}
              alt={album.title}
            />
          </div>
        </Carousel.Item>
      </Link>
    </>
  );
}
