import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

import { Books } from "../../components/booklist/BookList";
import Navbar from "../../components/navbar/Navbar";

function Register() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [submit, setSubmit] = useState([...Books]);

  let navigate = useNavigate();

  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const imageHandler = (e) => {
    e.preventDefault();
    setImage(e.target.value);
  };

  const descHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const finalSubmit = [
      {
        title,
        author,
        image,
        description,
      },
    ];
    setSubmit([...Books, ...finalSubmit]);
    Books.push(...finalSubmit);
    console.log(Books);

    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <form type="submit">
        <input
          type="text"
          className="title"
          value={title}
          onChange={titleHandler}
          placeholder="Title"
          autoFocus
        />
        <input
          type="text"
          className="author"
          value={author}
          onChange={authorHandler}
          placeholder="Author"
        />
        <input
          type="text"
          className="image"
          value={image}
          onChange={imageHandler}
          placeholder="Image URL"
        />
        <textarea
          value={description}
          className="description"
          onChange={descHandler}
          placeholder="Description"
        />
      </form>

      <button type="submit" onClick={submitHandler}>
        Add Book
      </button>
    </div>
  );
}

export default Register;
