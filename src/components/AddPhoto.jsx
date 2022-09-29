import React, { useState, useRef } from 'react';

export default function MainPage() {
  const [image, setImage] = useState('');
  const form = useRef(null); const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    fetch('/api/profile', {
      method: 'POST',
      encType: 'multipart/form-data',
      body: data,
    })
      .then((res) => res.json())
      .then((data2) => setImage(data2));
  };
  return (
    <div>
      <img src={`/images/${image}`} alt="wqdqwd" />
      {/* <form action="/api/v1/profile" method="post" encType="multipart/form-data"> */}
      {' '}
      <form ref={form} onSubmit={submitHandler}>
        <input type="file" name="avatar" />
        <button type="submit">UPLOAD</button>
      </form>
    </div>
  );
}
