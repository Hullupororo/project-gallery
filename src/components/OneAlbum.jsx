import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import MyPhotoCarousel from './MyPhotoCarousel';
import AddPhoto from './AddPhoto';

export default function OneAlbum({ currUser }) {
  const [photos, setPhotos] = useState([]);
  const [currAlbum, setCurrAlbum] = useState({});
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .then(
        fetch(`/api/onealbum/${id}`)
          .then((res) => res.json())
          .then((data) => setCurrAlbum(data)),
      );
  }, [show]);

  return (

    <>
      {currUser.id === currAlbum.userid
      && (
      <div className="buttons">

        <Button
          variant="dark"
          onClick={handleShow}
        >
          Добавить фото

        </Button>

        <Button
          variant="dark"
          onClick={() => navigate(`/album/edit/${id}`)}
        >
          Редактировать альбом

        </Button>
      </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add photo</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddPhoto handleClose={handleClose} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <h1>Фотографии</h1>
      <Carousel cols={2} rows={2} gap={20} loop>
        {photos.map((photo) => (
          <Carousel.Item>
            <MyPhotoCarousel key={photo.id} photo={photo} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>

  );
}
