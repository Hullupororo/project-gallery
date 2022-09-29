import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../components/AlbumPage';
import AuthPage from './auth/AuthPage';
import MyNavBar from './MyNavBar';
import RegistrationPage from './auth/RegistrationPage';

export default function App({ user }) {
  const [currUser, setCurrUser] = useState(user || {});

  const logOutHandler = () => {
    fetch('/api/auth/logout')
      .then(() => setCurrUser({}));
  };
  return (
    <Container>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/registration" element={<RegistrationPage setCurrUser={setCurrUser} />} />
        <Route path="/user/authorization" element={<AuthPage setCurrUser={setCurrUser} />} />
      </Routes>
    </Container>
  );
}
