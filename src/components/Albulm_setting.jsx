import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Albulmsetting({ setAllAlbums, setMyAlbums }) {
  const [album, setAlbum] = useState({});
  const [input, setInput] = useState({
    title: album.title || '',
    status: album.status || '',
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
      .then((res) => res.json())
      .then((data) => {
        setAllAlbums(data);
        setMyAlbums(data);
      })
      .then(navigate('/'));
  };
  return (
    <div className="row">
      <div className="col">
        <form onSubmit={submitHandler} >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Album Title</label>
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

          <p>Access Settings</p>
          <div className="form-check">
            <input onChange={inputHandler} className="form-check-input" type="radio" name="status" id="flexRadioDefault1" value="true" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Public
            </label>
          </div>
          <div className="form-check">
            <input onChange={inputHandler} className="form-check-input" type="radio" name="status" id="flexRadioDefault2" value="false"  />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Private
            </label>
          </div>
          <Button className="margin" type="submit" variant="dark">Save</Button>
        </form>
      </div>
    </div>
  );
}
