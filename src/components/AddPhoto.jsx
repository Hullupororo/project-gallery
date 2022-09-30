import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function AddPhoto({ handleClose }) {
  const param = useParams();
  const form = useRef(null); const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    fetch(`/api/photos/${param.id}`, {
      method: 'POST',
      encType: 'multipart/form-data',
      body: data,
    })
      .then((res) => res.json())
      .then(handleClose());
  };
  return (
    <div>
      {' '}
      <form ref={form} onSubmit={submitHandler}>
        <input type="file" name="avatar" />
        <button type="submit">UPLOAD</button>
      </form>
    </div>
  );
}
