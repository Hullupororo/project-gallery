import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './auth/AuthPage';
import MainPage from './MainPage';
import MyNavBar from './MyNavBar';
import RegistrationPage from './auth/RegistrationPage';
import OneAlbum from './OneAlbum';
import AddPhoto from './AddPhoto';
import Albumsetting from './Albulm_setting';

export default function App({ user, albums }) {
  const [myAlbums, setMyAlbums] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const [currUser, setCurrUser] = useState(user || {});
  useEffect(() => {
    fetch('/api/albums')
      .then((res) => res.json())
      .then((data) => {
        setAllAlbums(data);
        // setMyAlbums(data.filter((el) => el.userid === currUser.id));
      });
  }, [currUser]);

  if (currUser) {
    useEffect(() => {
      fetch('/api/myalbums')
        .then((res) => res.json())
        .then((data) => {
  
          setMyAlbums(data);
        });
    }, [currUser]);
  }

  const logOutHandler = () => {
    fetch('/api/auth/logout')
      .then(() => setCurrUser({}));
  };
  return (
    <Container fluid style={{padding: "0"}}>
      <MyNavBar currUser={currUser} logOutHandler={logOutHandler} />
      <Routes>
        <Route
          path="/"
          element={(
            <MainPage
              albums={albums}
              currUser={currUser}
              myAlbums={myAlbums}
              setMyAlbums={setMyAlbums}
              allAlbums={allAlbums}
              setAllAlbums={setAllAlbums}
            />
)}
        />
        <Route
          path="/album/:id"
          element={(
            <OneAlbum
              currUser={currUser}
              myAlbums={myAlbums}
            />
)}
        />
        <Route path="/album/photos" element={<AddPhoto />} />

        <Route path="/album/edit/:id" element={<Albumsetting setMyAlbums={setMyAlbums} setAllAlbums={setAllAlbums} />} />
        <Route path="/album/photo_edit/:id" element={<AddPhoto setMyAlbums={setMyAlbums} setAllAlbums={setAllAlbums} />} />

        <Route path="/user/registration" element={<RegistrationPage setCurrUser={setCurrUser} setMyAlbums={setMyAlbums} />} />
        <Route path="/user/authorization" element={<AuthPage setCurrUser={setCurrUser} />} />
      </Routes>
    </Container>
  );
}
