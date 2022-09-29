import React, { useState } from 'react';

export default function Albulmsetting() {
  // const [input, setInput] = useState({
  //   name: '',
  //   describe: '',
  //   status: '',
  // });
  // const inputHandler = (e) => {
  //   setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   fetch('/api/album', {
  //     method: 'PATCH', // PUT
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(input),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setCurrUser(data));
  // };
  return (
    <div className="row">
      <div className="col">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Название альбома</label>
            <input value={input.name} onChange={changeHandler} name="name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Название альбома" />
          </div>
          <div className="mb-3">
            <label value="1" htmlFor="exampleFormControlInput1" className="form-label">Описание</label>
            <input name="describe" value={input.name} onChange={changeHandler} type="text" className="form-control" id="exampleFormControlInput1" placeholder="описание" />
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
