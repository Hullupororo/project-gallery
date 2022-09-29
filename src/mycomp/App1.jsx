import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
// import AuthPage from './auth/AuthPage';
// import MainPage from './MainPage';
// import MyNavBar from './MyNavBar';
// import RegistrationPage from './auth/RegistrationPage';
import Albulmsetting from '../components/Albulm_setting';
import Photosetting from '../components/Photo_setting';

export default function App({ }) {
  // const [currUser, setCurrUser] = useState(user || {});

  // const logOutHandler = () => {
  //   fetch('/api/auth/logout')
  //     .then(() => setCurrUser({}));
  // };
  return (
    <Container>

      <Routes>
        <Route path="/" element={<Photosetting />} />
        {/* <Route path="/user/registration" element={<RegistrationPage setCurrUser={setCurrUser} />} />
        <Route path="/user/authorization" element={<AuthPage setCurrUser={setCurrUser} />} /> */}

      </Routes>
    </Container>
  );
}
