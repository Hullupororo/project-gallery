import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './auth/AuthPage';
import MainPage from './MainPage';
import MyNavBar from './MyNavBar';
import RegistrationPage from './auth/RegistrationPage';

export default function App({ user, albums }) {
  const [currUser, setCurrUser] = useState(user || {});

  const logOutHandler = () => {
    fetch('/api/auth/logout')
      .then(() => setCurrUser({}));
  };
  return (
    <Container>
      <MyNavBar currUser={currUser} logOutHandler={logOutHandler} />
      <Routes>
        <Route path="/" element={<MainPage albums={albums} />} />
        <Route path="/user/registration" element={<RegistrationPage setCurrUser={setCurrUser} />} />
        <Route path="/user/authorization" element={<AuthPage setCurrUser={setCurrUser} />} />
      </Routes>
    </Container>
  );
}
