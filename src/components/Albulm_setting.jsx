import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Albulmsetting() {
  const [album, setAlbum] = useState({});
  const [input, setInput] = useState({
    title: album.title || '',
    status: album.status || true,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/onealbum/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setAlbum(data);
        setInput({ title: data.title, status: data.status });
      });
  }, []);

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`/api/albums/${id}`, {
      method: 'POST', // PUT
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
    })
      .then(() => {
        setInput((prev) => prev.map((el) => {
          if (el.id == id) {
            return input;
          }
          return el;
        }));
        navigate('/');
      })
      .catch(console.log);
  };

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Название альбома</label>
            <input
              value={input.title}
              onChange={inputHandler}
              name="title"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder={`${input.title}`}
            />
          </div>

          <p>Доступ</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="me" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Только мне
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="all" checked />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Всем
            </label>
          </div>
          <button type="submit">сохранить</button>
        </form>
      </div>
    </div>
  );
}
