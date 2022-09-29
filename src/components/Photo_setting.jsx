import React, { useState } from 'react';

export default function Photosetting() {
  const [input, setInput] = useState({
    name: '',
    describe: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/photo', {
      method: 'PUT', // Patch
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => setCurrUser(data));
  };

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={submitHandler}>
          <div className="mb-2">
            <label htmlFor="uploads"> Choose the images you want to upload: </label>
            <input
              type="file"
              id="uploads"
              name="uploads"
              accept=".jpg, .jpeg, .png, .svg, .gif"
              multiple
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Название фото</label>
            <input value={input.name} name="name" onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Название альбома" />
          </div>
          <div className="mb-3">
            <label value="1" htmlFor="exampleFormControlInput1" className="form-label">Комментарий</label>
            <input name="describe" value={input.describe} onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" placeholder="описание" />
          </div>
          <div className="mb-4">
            <p />
            <button type="submit">сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
