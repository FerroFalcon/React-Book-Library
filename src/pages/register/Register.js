import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

import { Books } from "../../components/booklist/BookList";

// This is the register page of the website
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
      <div className="nav_wrapper">
        <div className="brand_logo">
          <Link to="/" className="logo_link">
            BookBytes
          </Link>
        </div>
        <Link to="/">
          <div className="add_button">
            <svg
              stroke="currentColor"
              fill="#000000"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 2.5l.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5v-11zM6 3v10h1V3H6zm3.171.345l.299-.641 1.88-.684.64.299 3.762 10.336-.299.641-1.879.684-.64-.299L9.17 3.345zm1.11.128l3.42 9.396.94-.341-3.42-9.397-.94.342zM1 2.5l.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5v-11zM2 3v10h1V3H2z"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className="form_wrapper">
        <form type="submit">
          <input
            type="text"
            className="form_title"
            value={title}
            onChange={titleHandler}
            placeholder="Title"
            autoFocus
          />
          <input
            type="text"
            className="form_author"
            value={author}
            onChange={authorHandler}
            placeholder="Author"
          />
          <input
            type="text"
            className="form_image"
            value={image}
            onChange={imageHandler}
            placeholder="Image URL"
          />
          <textarea
            value={description}
            className="form_description"
            onChange={descHandler}
            placeholder="Description"
          />
          <button
            type="submit"
            className="submit_button"
            onClick={submitHandler}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
