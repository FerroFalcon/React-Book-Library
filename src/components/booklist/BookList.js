import React, { useState } from "react";
import Card from "../card/Card";
import "./BookList.css";

export const Books = [
  {
    id: 1,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
  },
  {
    id: 2,
    title: "The Games",
    author: "Suzanne Collins",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "The Hunger",
    author: "Suzanne Collins",
    image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
  },
  {
    id: 4,
    title: "Hunger",
    author: "Suzanne Collins",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
  },
  {
    id: 5,
    title: "Games",
    author: "Suzanne Collins",
    image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
  },
];

function BookList() {
  const [update, setUpdate] = useState([...Books]);
  return (
    <div className="main_wrapper">
      {update.map((book) => {
        return (
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        );
      })}
    </div>
  );
}

export default BookList;
